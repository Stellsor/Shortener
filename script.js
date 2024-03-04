function shortenUrl() {
    var access_token = "f929e0ec5a154bf7dd6588f7b4f58695a8efadc4";
    var long_url = document.getElementById("long_url").value;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://api-ssl.bitly.com/v4/shorten", true);
    xhr.setRequestHeader("Authorization", "Bearer " + access_token);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            var response_data = JSON.parse(this.responseText);
            var result_div = document.getElementById("result");
            result_div.innerHTML = "Your shortened URL is: <a href='" + response_data.link + "' target='_blank'>" + response_data.link + "</a>";
            result_div.style.display = "block";
        }
    };
    xhr.send(JSON.stringify({long_url: long_url}));
}