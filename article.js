document.getElementById('shareButton').addEventListener('click', function() {
    const icons = document.querySelector('.icons');
    const n = document.querySelector('.n');
    const hiddenImages = document.querySelectorAll('.icons img');
    const hiddenSpan = document.querySelector('.icons span');
    
    const iconsStyle = window.getComputedStyle(icons).backgroundColor;

    if (iconsStyle === 'rgba(0, 0, 0, 0)' || iconsStyle === 'transparent') { 

        icons.style.backgroundColor = 'hsl(217, 19%, 35%)';
        n.style.borderTopColor = 'hsl(217, 19%, 35%)';
        
        // إظهار الصور والنص
        hiddenImages.forEach(image => {
            image.style.display = 'inline'; 
        });
        hiddenSpan.style.display = 'inline'; 
    } else {

        icons.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        n.style.borderTopColor = 'rgba(0, 0, 0, 0)';
        
        hiddenImages.forEach(image => {
            image.style.display = 'none';
        });
        hiddenSpan.style.display = 'none';
    }
});
