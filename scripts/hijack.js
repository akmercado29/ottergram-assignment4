function disableLink(link) {
    'use strict';
    link.addEventListener('click', function(event) {
        event.preventDefault();
    });
}
var linksArray = [].slice.call(document.querySelectorAll('a'));
linksArray.forEach(disableLink);
