// Lazy loadin Image IntersectionObserver
function lazyImageObserverFunc(lazyImages) {
	let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.srcset = lazyImage.dataset.srcset;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
		}
      });
    });

    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });	
}

export const DOMContentLoaded = () => {
            
    let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

    if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) {
        if(lazyImages.length) {
            lazyImageObserverFunc(lazyImages);
        }   
    } else {
        if(lazyImages.length) {
            lazyImages.forEach(function(img) {
                img.src = img.dataset.src;
                img.srcset = img.dataset.srcset;
                img.classList.remove("lazy");
            });	
        }   
    }
}
