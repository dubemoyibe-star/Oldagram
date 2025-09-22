const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 215
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let heartEl = document.getElementById("heart-el")
let likesEl = document.getElementById("likes-el")
let postEl = document.getElementById("post-el")
let isLiked = false

heartEl.addEventListener("click" , function(){
    if (isLiked){
       renderUnlike()
    }else {
        render()
    }
    isLiked = !isLiked
})

postEl.addEventListener("dblclick" , function(){
     if (isLiked){
       renderUnlike()
    }else {
        render()
    }
     isLiked = !isLiked
})

function  render(){
     let recentLike = posts[0].likes + 1
     likesEl.innerHTML = ""
     likesEl.innerHTML += `${recentLike} likes `
}

function  renderUnlike(){
     let recentLike = posts[0].likes 
     likesEl.innerHTML = ""
     likesEl.innerHTML += `${recentLike} likes `
     
}


