document.addEventListener("DOMContentLoaded", function() {


    // Carbon footprint calculator code
    const carbonForm = document.getElementById('carbonForm');
    const result = document.getElementById('result');

    carbonForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const distance = parseFloat(document.getElementById('distance').value);
        const carbonFootprint = distance * 0.2; // Assuming a carbon emission rate of 0.2 kg per km
        
        result.innerHTML = `Your carbon footprint for traveling ${distance} km is ${carbonFootprint.toFixed(2)} kg.`;
    });
});
