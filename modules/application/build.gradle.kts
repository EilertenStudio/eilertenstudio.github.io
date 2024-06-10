import org.jetbrains.kotlin.gradle.targets.js.npm.NpmExtension

plugins {
    // Kotlin
    // ------------------------------------------------------------------------
    kotlin("multiplatform")

    // Eilerten Studio
    // ------------------------------------------------------------------------
    est("vite")
}

group = "com.eilertenstudio"
version = "0.0.1-SNAPSHOT"

kotlin {
    js {
        nodejs {
            compilations["main"].packageJson {
                this.name = "@eilertenstudio/website"
                version = project.version as String
                main = null
                customField("type", "module")
                customField(
                    "scripts", mapOf(
                        "dev" to "vite",
                        "build" to "tsc && vite build",
                        "lint" to "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
                        "preview" to "vite preview"
                    )
                )
            }
        }
    }
    sourceSets {
        jsMain.configure {
            kotlin.srcDir("src/jsMain/typescript")
            dependencies {
                implementation(npm("react", "^${extra.get("react.version")}"))
                implementation(npm("react-dom", "^${extra.get("react.version")}"))

                implementation(devNpm("@types/react", "^${extra.get("react.version")}"))
                implementation(devNpm("@types/react-dom", "^${extra.get("react.version")}"))
                implementation(
                    devNpm(
                        "@typescript-eslint/eslint-plugin",
                        "^${extra.get("typescript-plugin-eslint.version")}"
                    )
                )
                implementation(devNpm("@typescript-eslint/parser", "^${extra.get("typescript-plugin-eslint.version")}"))
                implementation(devNpm("@vitejs/plugin-react", "^${extra.get("vite-plugin-react.version")}"))
                implementation(devNpm("eslint", "^${extra.get("eslint.version")}"))
                implementation(
                    devNpm(
                        "eslint-plugin-react-hooks",
                        "^${extra.get("eslint-plugin-react-hooks.version")}"
                    )
                )
                implementation(
                    devNpm(
                        "eslint-plugin-react-refresh",
                        "^${extra.get("eslint-plugin-react-refresh.version")}"
                    )
                )
                implementation(devNpm("typescript", "^${extra.get("typescript.version")}"))
                implementation(devNpm("vite", "^${extra.get("vite.version")}"))
            }
        }
    }
}


tasks {
    register("viteBuild") {
        group = "Vite"
        description = ""

        dependsOn("viteSetup")
        doLast {
            exec {
                workingDir = projectDir
                executable = rootProject.the<NpmExtension>().environment.executable
                args = listOf(
                    "run",
                    "build"
                )
                println(workingDir)
                println(commandLine)
                println()
            }
        }
    }

    register("viteDev") {
        group = "Vite"
        description = ""

        dependsOn("viteSetup")
        doLast {
            exec {
                workingDir = projectDir
                executable = rootProject.the<NpmExtension>().environment.executable
                args = listOf(
                    "run",
                    "dev"
                )
                println(workingDir)
                println(commandLine)
                println()
            }
        }
    }

    register("vitePreview") {
        group = "Vite"
        description = ""

        dependsOn("viteBuild")
        doLast {
            exec {
                workingDir = projectDir
                executable = rootProject.the<NpmExtension>().environment.executable
                args = listOf(
                    "run",
                    "preview"
                )
                println(workingDir)
                println(commandLine)
                println()
            }
        }
    }
}