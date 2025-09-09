(function() {
    const img = document.querySelector("img");

    const imageURL = img.src;
    
    const fileName = imageURL.split("/").pop().split("?")[0];
    
    const a = document.createElement("a")
    
    a.href = imageURL
    a.download = fileName
    document.body.appendChild(a);
    a.click();
}

)();