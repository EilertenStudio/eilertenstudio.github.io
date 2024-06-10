import org.gradle.plugin.use.PluginDependenciesSpec
import org.gradle.plugin.use.PluginDependencySpec

fun PluginDependenciesSpec.est(module: String): PluginDependencySpec =
    id("com.eilertenstudio.integrations.gradle.plugins.$module")
