plugins {
    // IDE
    // ------------------------------------------------------------------------
    id("idea")
}

idea {
    module {
        isDownloadJavadoc = true
        isDownloadSources = true

      sourceDirs.addAll(arrayOf(
        file("src")
      ))
      resourceDirs.addAll(arrayOf(
        file("public")
      ))
    }
}
