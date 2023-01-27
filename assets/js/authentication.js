const shortForm = document.querySelector(".main_content_form");
const shortUrl = document.querySelector(".short_link");
const copyUrl = document.querySelector(".copy_btn");
const token = "dea101ea0e249ef000c9b0e1a6dc1d05f563c26f";

shortForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const longUrl = document.querySelector("#long_url");

    if(longUrl.value == ""){
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

    fetch("https://api-ssl.bitly.com/v4/shorten", config)
        .then((response) => response.json())
        .then((response) => {
            treatmentResponse = response.link; 
            console.log(response);
            
        })
        .catch((err) => {console.error(err)});
        
    longUrl.value = "";
    
    if(!treatmentResponse) {
    shortUrl.innerHTML = "URL INVALIDA"
    return;
    }

    shortUrl.innerHTML = treatmentResponse;
});

copyUrl.addEventListener("click", () => {
    let copyText = shortUrl.innerText;

    navigator.clipboard.write([new ClipboardItem({
        ["text/plain"]: new Blob([copyText], { type: "text/plain" })
    })])
        .then(() => console.log("Copiou"),
            () => console.log("Não copiou"))
})