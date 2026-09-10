'use strict';

const form = document.getElementById('fm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const message = new FormData(form);
    
    for(var pair of message.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
    }
});
