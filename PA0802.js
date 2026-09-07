//This creates a name for our cache

const { cache } = require("react")

const CACHE_NAME = "tech conference"

//This is the list of files that should be cached

const filesToCache = [
    "index.html",
    "styles.css",
    "app.js"
]

cache

//Save important files in the cache 
self.addEventListener("install", function(event){
    event.waitUntil(
        cache.
        cache.open(CACHE_NAME)
        .then(function(cache){
            console.log("CACHING WEBSITE FILE...")
            return CACHE_NAME.addAll(filesToCache)
        })
    )

})