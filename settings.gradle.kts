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
    ?.filter { it -> it.isDirectory }
    ?.filter { it -> it.name.equals("modules") }
    ?.forEach {
        it.listFiles()
            ?.forEach { file ->
                include(":${file.name}")
                project(":${file.name}").projectDir = file
            }
    }
