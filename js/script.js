document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');
    const images = [
        { src: 'images/bpbQS.png', title: 'backpackbattlesQS.js', url: 'https://jexxme.github.io/bpbQS/' },
        { src: 'images/sortAlgorithms.png', title: 'sortAlgorithms.js', url: 'https://jexxme.github.io/sortAlgorithms' },
        { src: 'images/itVsRe.png', title: 'iterationVsRecursion.js', url: 'https://jexxme.github.io/rekursionVsIteration/' },
        { src: 'images/multiStageRegister.png', title: 'multiStageRegister.js', url: 'https://jexxme.github.io/vdv-infos/' },
        { src: 'images/numberSystemGame.png', title: 'numberSystemGame.js', url: 'https://jexxme.github.io/numberSystemGameWeb/' },
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
