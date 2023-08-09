var url = 'http://opendata.brussels.be/api/records/1.0/search/?dataset=associations-clubs-sportifs';

var xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
xhr.onload = function() {
    if (xhr.status === 200) {
        // success
        console.log(JSON.parse(xhr.responseText));
    } else {
        // error
        console.log(JSON.parse(xhr.responseText));
    }
};
xhr.send();