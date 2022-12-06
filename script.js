
let mainContainer= document.getElementById("redditData")
fetch("https://www.reddit.com/r/aww/.json")
.then(res => res.json())
.then(data => {console.log(data.data.children[0].data)
for(
    let i=0; i < data.data.children.length; i++
)
{
    let div= document.createElement("div")
    let image = document.createElement("img")
    let link = document.createElement("a")
    link.href = data.data.children[i].data.url
    link.innerHTML="link"
    image.src = data.data.children[i].data.thumbnail
    div.innerHTML = "title:"+data.data.children[i].data.title
    mainContainer.appendChild(div)
    div.appendChild(image)
    div.appendChild(link)
    console.log("working")
}
}
)