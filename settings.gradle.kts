pluginManagement {
    resolutionStrategy {
        plugins {
            // IDE
            // ----------------------------------------------------------------
            id("idea")

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
    ?.filter { it.isDirectory
            && it.name.equals("integrations")
    }
    ?.forEach { category -> category.listFiles()
        ?.filter { it.isDirectory }
        ?.forEach { module ->
//            includeBuild(module.path) {
//                name = "${category.name}:${module.name}"
//            }
            ":${category.name}:${module.name}".let {
                include(it)
                project(it).apply {
                    projectDir = module
                }
            }
        }
    }
