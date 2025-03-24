document.addEventListener('DOMContentLoaded', function() {
    const hoverArea = document.querySelector('.hover-area');
    const hoverImage = document.querySelector('.hover-image');

    if (hoverArea && hoverImage) {
        hoverArea.addEventListener('mousemove', function(e) {
            const rect = hoverArea.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const eyePath = `path('M ${x - 100},${y} Q ${x - 60},${y - 60} ${x},${y - 60} Q ${x + 60},${y - 60} ${x + 100},${y} Q ${x + 60},${y + 60} ${x},${y + 60} Q ${x - 60},${y + 60} ${x - 100},${y} Z')`;

            hoverImage.style.clipPath = eyePath;
        });

        hoverArea.addEventListener('mouseleave', function() {
            hoverImage.style.clipPath = 'inset(0 0 0 0)';
        });
    }
});
