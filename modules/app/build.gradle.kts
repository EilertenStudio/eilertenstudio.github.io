plugins {
    // Kotlin
    // ------------------------------------------------------------------------
    kotlin("multiplatform")
}

kotlin {
    js {
        useEsModules()
        browser {
            webpackTask {
                mainOutputFileName = "main.js"
            }
        }
        binaries.executable()
    }
    sourceSets {
        jsMain {
            dependencies {
                implementation(project.dependencies.platform("org.jetbrains.kotlin-wrappers:kotlin-wrappers-bom:${extra["kotlin.js.wrappers.version"]}"))
                implementation("org.jetbrains.kotlin-wrappers:kotlin-react")
                implementation("org.jetbrains.kotlin-wrappers:kotlin-react-dom")
            }
        }
    }
}