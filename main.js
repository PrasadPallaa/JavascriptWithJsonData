var xhr = new XMLHttpRequest();
var url = 'https://jsonplaceholder.typicode.com/posts';
xhr.responseType = 'text';

xhr.open('GET', url, true);
xhr.send();

xhr.onload = function () {
    if (xhr.status === 200) {
        var posts = JSON.parse(xhr.responseText);
        var tbody = "";
        for (i = 0; i < posts.length; i++) {
            var trStart = "<tr>";
            var cols = Object.keys(posts[i]);
            for (j = 0; j < cols.length; j++) {
                var key = cols[j];
                var td = "";
                if (key == 'userId') {
                    td = "<td class='red' >" + posts[i][key] + "</td>";
                } else {
                    td = "<td>" + posts[i][key] + "</td>";
                }
                trStart += td;
            }
            var trEnd = "</tr>";
            tbody += trStart + trEnd;
        }
        document.getElementById('tbody').innerHTML = tbody;
    }
}

console.log();