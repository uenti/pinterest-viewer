(function() {
    const img = document.querySelector("img");
    if (!img) return;

    const imageURL = img.src;
    const fileName = imageURL.split("/").pop().split("?")[0]
    
    fetch(imageURL, {mode: "cors"})
        .then(respone => {
            return respone.blob();
    })

    .then(blob => {
        const blobUrl = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = blobUrl;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        URL.revokeObjectURL(blobUrl);
    })

})();

