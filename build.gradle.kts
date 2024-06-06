plugins {
    // IDE
    // ------------------------------------------------------------------------
    id("idea")
}

idea {
    module {
        isDownloadJavadoc = true
        isDownloadSources = true
    }
}
