(function animateFavicon() {
    const FRAME_COUNT = 94;
    const FRAME_INTERVAL_MS = 40; // ~25 fps

    // Get base path relative to site root
    const basePath = '/images/favicon/frames/';

    const frameUrls = [];
    for (let i = 1; i <= FRAME_COUNT; i++) {
        frameUrls.push(`${basePath}j_${i}.gif`);
    }

    // Preload frames in background so there's no flicker
    frameUrls.forEach(src => { 
        const img = new Image(); 
        img.src = src; 
    });

    let frameIndex = 0;

    function setFavicon(href) {
        let link = document.getElementById('animated-favicon');
        if (!link) {
            link = document.createElement('link');
            link.id = 'animated-favicon';
            link.rel = 'icon';
            document.head.appendChild(link);
        }
        link.href = href;
    }

    setInterval(() => {
        setFavicon(frameUrls[frameIndex]);
        frameIndex = (frameIndex + 1) % FRAME_COUNT;
    }, FRAME_INTERVAL_MS);
})();
