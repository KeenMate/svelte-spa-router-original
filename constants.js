export const HashRoutingEnabled = import.meta.env.VITE_SVELTE_SPA_ROUTER_HASH_ENABLED === "true"
export const BasePath           = import.meta.env.BASE_URL || "/"

export const SvelteSPARouterNavigationEvent = "popstate"

console.log("Hash routing enabled: ", HashRoutingEnabled)