const shortForm = document.querySelector(".main_content_form");
const shortUrl = document.querySelector(".display-url");
const copyUrl = document.querySelector(".copy_btn");
const token = "dea101ea0e249ef000c9b0e1a6dc1d05f563c26f";

shortForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const longUrl = document.querySelector("#long_url");
    //const checkUrl = checkUrl();

    const config = {
        method: "POST",
        headers: {
            accept: "application/json", 
            "content-type": "application/json",
            api_key: "dea101ea0e249ef000c9b0e1a6dc1d05f563c26f"
        },
        body: JSON.stringify({destination: longUrl.value})
    };

    fetch("https://api-ssl.bitly.com/v4/shorten", config)
        .then((response) => response.json())
        .then((response) => {
            shortUrl.innerHTML = response.shortUrl;
            copyUrl.disable = "false"; 
        })
        .catch((err) => console.error(err));
});
 
copyUrl.addEventListener("click", () => {
    simpleCopy(shortUrl.innerHTML);
    alert("Copied");
    copyUrl.disable = "true";
})