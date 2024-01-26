function togglePhotoVisibility(imageAlt) {
    console.log('Toggling photo visibility for: ' + imageAlt);
    
    // Use querySelectorAll to get all matching elements
    var photos = document.querySelectorAll('img[alt="' + imageAlt + '"]');
    
    // Check if any elements are found
    if (photos.length === 0) {
        console.error('Image not found:', imageAlt);
        return;
    }

    // Toggle visibility for each matching element
    photos.forEach(function(photo) {
        var photoStyle = window.getComputedStyle(photo);
        var currentDisplay = photoStyle.getPropertyValue('display') || '';

        if (currentDisplay === "none") {
            photo.style.display = "block";
        } else {
            photo.style.display = "none";
        }
    });
}
