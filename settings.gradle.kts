pluginManagement {
    resolutionStrategy {
        plugins {
            // Kotlin
            // ----------------------------------------------------------------
            kotlin("multiplatform") version (extra["kotlin.version"] as String)
        }
    }
}

dependencyResolutionManagement {
    repositories {
        mavenCentral()
    }
}

rootProject.projectDir
    .listFiles()
    ?.filter { it.isDirectory }
    ?.filter { it.name.equals("modules") }
    ?.forEach {
        it.listFiles()
            ?.filter { file -> file.isDirectory }
            ?.forEach { file ->
                include(":${file.name}")
                project(":${file.name}").projectDir = file
            }
    }
