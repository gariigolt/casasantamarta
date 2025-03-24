document.addEventListener('DOMContentLoaded', function() {
    const hoverArea = document.querySelector('.hover-area');
    const hoverImage = document.querySelector('.hover-image');
    const eyePath = document.getElementById('eye-path');

    if (hoverArea && hoverImage && eyePath) {
        hoverArea.addEventListener('mousemove', function(e) {
            const rect = hoverArea.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const pathData = `M ${x - 150},${y} Q ${x - 90},${y - 90} ${x},${y - 90} Q ${x + 90},${y - 90} ${x + 150},${y} Q ${x + 90},${y + 90} ${x},${y + 90} Q ${x - 90},${y + 90} ${x - 150},${y} Z`;
            
            eyePath.setAttribute('d', pathData);
        });

        hoverArea.addEventListener('mouseleave', function() {
            eyePath.setAttribute('d', '');
        });
    }
});
