
function getsearch() {
    var img = document.getElementById("img");
    var result =document.getElementById("search").value;
    
    fetch("https://api.github.com/users/"+result).then(res => res.json()).then(profile =>img.src =profile.avatar_url)
    fetch("https://api.github.com/users/"+result).then(res => res.json()).then(profile =>document.getElementById("name").innerHTML =profile.name)
    fetch("https://api.github.com/users/"+result).then(res => res.json()).then(profile =>document.getElementById("bio").innerHTML =profile.bio)
    fetch("https://api.github.com/users/"+result).then(res => res.json()).then(profile =>document.getElementById("company").innerHTML =profile.company)
    fetch("https://api.github.com/users/"+result).then(res => res.json()).then(profile =>document.getElementById("location").innerHTML =profile.location)
    fetch("https://api.github.com/users/"+result).then(res => res.json()).then(profile =>document.getElementById("followers").innerHTML =profile.followers)
    fetch("https://api.github.com/users/"+result).then(res => res.json()).then(profile =>document.getElementById("following").innerHTML =profile.following)
    fetch("https://api.github.com/users/"+result).then(res => res.json()).then(profile =>document.getElementById("created_at").innerHTML =profile.created_at)
    fetch("https://api.github.com/users/"+result).then(res => res.json()).then(profile =>document.getElementById("updated_at").innerHTML =profile.updated_at)
}