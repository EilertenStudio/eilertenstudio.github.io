package com.eilertenstudio.portal.app

import react.FC
import react.Props
import react.create
import react.dom.client.createRoot
import web.dom.document

fun main() {
    console.log("Kotlin Started!")
    console.log(PortalApp)
//    createRoot(document.getElementById("root")!!).render(App.create())
}

//@JsModule("com/eilertenstudio/portal/app/components/HelloWorld")
//@JsNonModule
//@file:JS
@JsModule("@eilertenstudio/portal-app")
external object PortalApp
//@JsNonModule
//private external val App: FC<Props>
