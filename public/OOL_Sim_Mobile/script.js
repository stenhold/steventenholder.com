// Assuming the getUser button and userInfo are part of the HTML or handled elsewhere
document.addEventListener('DOMContentLoaded', function() {
    var getUserButton = document.getElementById("getUser");
    if (getUserButton) {
        getUserButton.addEventListener("click", function() {
            fetch("/api/app")
                .then(response => response.json())
                .then(data => {
                    var userInfoDiv = document.getElementById("userInfo");
                    if (userInfoDiv) {
                        userInfoDiv.innerHTML = `<p>${data.message}</p>`;
                    }
                })
                .catch(error => console.error('Error:', error));
        });
    }
});
