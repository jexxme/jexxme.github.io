document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');
    const images = [
        { src: 'images/sortAlgorithms.png', title: 'sortAlgorithms.js', url: 'https://jexxme.github.io/sortAlgorithms' },
        { src: 'images/itVsRe.png', title: 'iterationVsRecursion.js', url: 'https://jexxme.github.io/rekursionVsIteration/' },
        // Add more images as needed with their corresponding URLs
    ];

    images.forEach(image => {
        const link = document.createElement('a');
        link.href = image.url;
        link.className = 'gallery-item';
        link.innerHTML = `
            <img src="${image.src}" alt="${image.title}" class="gallery-image">
            <p>${image.title}</p>
        `;
        gallery.appendChild(link);
    });
});
