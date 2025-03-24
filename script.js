document.addEventListener('DOMContentLoaded', function() {
    const hoverArea = document.querySelector('.hover-area');
    const hoverImage = document.querySelector('.hover-image');

    if (hoverArea && hoverImage) {
        hoverArea.addEventListener('mousemove', function(e) {
            const rect = hoverArea.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const eyePath = `path('M ${x - 150},${y} Q ${x - 90},${y - 90} ${x},${y - 90} Q ${x + 90},${y - 90} ${x + 150},${y} Q ${x + 90},${y + 90} ${x},${y + 90} Q ${x - 90},${y + 90} ${x - 150},${y} Z')`;

            hoverImage.style.clipPath = eyePath;
        });

        hoverArea.addEventListener('mouseleave', function() {
            hoverImage.style.clipPath = 'inset(0 0 0 0)';
        });
    }
});
