if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        // Do something with latitude and longitude
    });
} else {
    // Geolocation not supported
}
