import org.gradle.internal.impldep.com.google.common.collect.Comparators

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
    ?.filter { file -> file.isDirectory }
    ?.filter { file ->
        arrayOf(
            "integrations",
            "modules"
        ).map {
            it == file.name
        }.reduce { acc, b -> acc || b }
    }
    ?.forEach { category ->
        category.listFiles()
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
