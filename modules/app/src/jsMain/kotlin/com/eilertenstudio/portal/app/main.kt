package com.eilertenstudio.portal.app

import react.FC
import react.Props
import react.create
import react.dom.client.createRoot
import web.dom.document

fun main() {
    createRoot(document.getElementById("root")!!).render(App.create())
}

private val App = FC<Props> {
    +"Hello, world!"
}
