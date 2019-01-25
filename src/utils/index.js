// Lazy loadin Background Image IntersectionObserver
const lazyBgImageObserverFunc = (lazyBgImages) => {
    let lazyBgImageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                lazyBgImageObserver.unobserve(entry.target);
            }
        });
    });

    lazyBgImages.forEach(function(lazyBgImage) {
        lazyBgImageObserver.observe(lazyBgImage);
    });	
}

export const DOMContentLoaded = () => {
        console.log('hello');
        
        // document.addEventListener("DOMContentLoaded", () => {
    
        let lazyBackgrounds = [].slice.call(document.querySelectorAll(".lazy-background"));

        if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) {
            if(lazyBackgrounds.length) {
                lazyBgImageObserverFunc(lazyBackgrounds);
            }   
        }
    // });
}
