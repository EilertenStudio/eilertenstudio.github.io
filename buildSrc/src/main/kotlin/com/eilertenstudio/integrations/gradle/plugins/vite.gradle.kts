package com.eilertenstudio.integrations.gradle.plugins

val nodeModulesDirectoryName = "node_modules"
val nodeModulesSourceDirectory = rootProject.file("build/js")
val nodeModulesDestinationDirectory = projectDir

val packageJsonFileName = "package.json"
val packageJsonSourceDirectory = file("build/tmp/jsPublicPackageJson")
val packageJsonDestinationDirectory = projectDir

tasks {
    register("viteSetup") {
        group = "Vite"
        description = ""

        dependsOn("build")
        doLast {
            copy {
                from(nodeModulesSourceDirectory.resolve(nodeModulesDirectoryName))
                into(nodeModulesDestinationDirectory.resolve(nodeModulesDirectoryName))
            }
            copy {
                from(packageJsonSourceDirectory.resolve(packageJsonFileName))
                into(packageJsonDestinationDirectory)
            }
        }
    }
    register("viteClean") {
        group = "Vite"
        description = ""

        doLast {
            delete(
                nodeModulesDestinationDirectory.resolve(nodeModulesDirectoryName),
                packageJsonDestinationDirectory.resolve(packageJsonFileName)
            )
        }
    }
    afterEvaluate {
        getByName("clean").dependsOn("viteClean")
    }
}

//    register("viteBuild") {
//        group = "Vite"
//        description = ""
//
//        dependsOn("viteSetup")
//        doLast {
//            exec {
//                workingDir = projectDir
//                executable = rootProject.the<NpmExtension>().environment.executable
//                args = listOf(
//                    "run",
//                    "build"
//                )
//                println(workingDir)
//                println(commandLine)
//                println()
//            }
//        }
//    }

//    register("viteDev") {
//        group = "Vite"
//        description = ""
//
//        dependsOn("viteSetup")
//        doLast {
//            exec {
//                workingDir = projectDir
//                executable = rootProject.the<NpmExtension>().environment.executable
//                args = listOf(
//                    "run",
//                    "dev"
//                )
//                println(workingDir)
//                println(commandLine)
//                println()
//            }
//        }
//    }
//
//    register("vitePreview") {
//        group = "Vite"
//        description = ""
//
//        dependsOn("viteBuild")
//        doLast {
//            exec {
//                workingDir = projectDir
//                executable = rootProject.the<NpmExtension>().environment.executable
//                args = listOf(
//                    "run",
//                    "preview"
//                )
//                println(workingDir)
//                println(commandLine)
//                println()
//            }
//        }
//    }
//}

//rootProject.plugins.withType(NodeJsRootPlugin::class.java) {
//    rootProject.the<NodeJsRootExtension>().apply {
//        println(this.installationDir.absolutePath)
//        println(this.nodeJsSetupTaskProvider.get())
//    }
//    rootProject.the<NpmExtension>().apply {
//        println(this.environment)
//    }
//}

//rootProject.plugins.withType(NodeJsRootPlugin::class.java) {
//    the<NodeJsRootExtension>().apply {
//        println(this)
//    }
//}

//tasks.register("setup") {
//    doLast {
//        //      npm create vite@latest my-vue-app -- --template vue
//        exec {
//            workingDir = projectDir
//            executable = rootProject.the<NpmExtension>().environment.executable
//            args = listOf(
//                "create",
//                "vite@latest",
//                ".",
//                "--",
//                "--template",
//                "react-ts"
//            )
//            println(workingDir)
//            println(commandLine)
////            commandLine(
////                rootProject.the<NpmExtension>().environment.executable.replace("npm", "npx"),
////                "create",
////                "vite@latest",
////                "test",
////                "--",
////                "vue"
////            )
//        }
//    }
//}
