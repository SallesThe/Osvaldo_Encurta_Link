const shortForm = document.querySelector(".main_content_form");
const shortUrl = document.querySelector(".short_link");
const copyUrl = document.querySelector(".copy_btn");
const token = "dea101ea0e249ef000c9b0e1a6dc1d05f563c26f";

shortForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const longUrl = document.querySelector("#long_url");

    if (longUrl.value == "") {
        shortUrl.innerHTML = 'Nenhuma URL informada';
        return;
    }

    let treatmentResponse;

    const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ long_url: longUrl.value, domain: "bit.ly", group_guid: "" })
    };
    
    longUrl.value = "";

<<<<<<< HEAD
=======
    longUrl.value = "";

>>>>>>> 837b384a7ab422d369f50601bea4ac248909692f
    await fetch("https://api-ssl.bitly.com/v4/shorten", config)
        .then((response) => response.json())
        .then((response) => {
            treatmentResponse = response.link ?? null;
            console.log(response.link);

        })
<<<<<<< HEAD
        .catch((err) => {console.error(err)});
        
    if(!treatmentResponse) {
    shortUrl.innerHTML = "URL INVALIDA"
    return;
=======
        .catch((err) => { console.error(err) });    

    if (!treatmentResponse) {
        shortUrl.innerHTML = "URL INVALIDA"
        return;
>>>>>>> 837b384a7ab422d369f50601bea4ac248909692f
    }

    shortUrl.innerHTML = treatmentResponse;
});

copyUrl.addEventListener("click", () => {
    let copyText = shortUrl.innerText;

    alert("Copiado!")
    
    navigator.clipboard.write([new ClipboardItem({
        ["text/plain"]: new Blob([copyText], { type: "text/plain" })
    })])
        .then(() => console.log("Copiou"),
            () => console.log("Não copiou"))
})