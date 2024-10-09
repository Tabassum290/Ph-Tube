// 1=fetch,load and show categories on html
function getTimeString(time){
    // get hour and rest seconds
    const hour = parseInt(time/3600);
    let remainingSeconds = time % 3600;
    const minute = parseInt(remainingSeconds /60);
    remainingSeconds = remainingSeconds % 60;
    return `${hour} hour ${minute} minute ${remainingSeconds} second ago`;
}
const removeActiveClass = ()=> {
const buttons = document.getElementsByClassName("category-btn");
console.log(buttons);
for(let btn of buttons){
    btn.classList.remove("active");
}
}

const loadDetails = async (videoId)=>{
console.log(videoId);
const uri = `https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`;
const res = await fetch(uri);
const data = await res.json();
displayDetails(data.video);
};
const displayDetails = (video)=>{
console.log(video);
  const detailsContainer = document.getElementById("modal-content");
detailsContainer.innerHTML =`
<img src=${video.thumbnail} />
<p>${video.description}</p>
`;

//   way-1
// document.getElementById("showModalData").click();
// way-2
document.getElementById("customModal").showModal();

};
// create loadcategories
const loadCategories = () => {
  // fetch the data
fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
.then((res) => res.json())
.then((data) => displayCategories(data.categories))
.catch((error) => console.log(error));
};
const loadCategoryVideos = (id) => {
// fetch
fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
.then((res) => res.json())
.then((data) =>{ 
    // sobaike active class remove korao
    removeActiveClass();
    // id er class add koro
    const activeBtn = document.getElementById(`btn-${id}`);
    activeBtn.classList.add('active');
    displayVideos(data.category)})
.catch((error) => console.log(error));
}
// create displaycategories
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById("categories");
    categories.forEach((item) => {
        console.log(item);
        // create a button
        const buttonContainer = document.createElement("div");
buttonContainer.innerHTML = `<button id="btn-${item.category_id}" onclick="loadCategoryVideos(${item.category_id})" class="btn category-btn">${item.category}</button>`;
// add button to category container
categoryContainer.append(buttonContainer);
    });
};
// videoload 
const loadVideos = (searchText = "") => {
    // fetch the video
    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`)
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos))
    .catch((error) => console.log(error));
    };
// create displayvideos
const displayVideos = (videos)=> {
const videoContainer = document.getElementById("videos");
videoContainer.innerHTML = "";


if(videos.length == 0){
    videoContainer.classList.remove("grid");
    videoContainer.innerHTML = `
    <div class=" min-h-[300px] w-full flex flex-col gap-5 justify-center items-center mx-auto
"><img src="./assets/Icon.png" alt="">
<h2 class="text-gray-400 text-xl font-bold">No Content here in this category</h2>
</div>
    `;
    return;
}else{
    videoContainer.classList.add("grid");
}
videos.forEach(video => {
    console.log(video);
    const card = document.createElement("div");
    card.classList = "card card-compact";
    card.innerHTML =`
    <figure class="h-[200px] relative">
    <img class="h-full w-full object-cover"
      src=${video.thumbnail} alt="Shoes" />
      ${video.others.posted_date ?.length == 0 ? "": `<span class="absolute right-2 bottom-2 bg-black text-white text-xs rounded p-2">${getTimeString(video.others.posted_date)}</span>`}
  </figure>
  <div class="py-2 flex gap-2">
<div>
    <img class="w-10 h-10 rounded-full object-cover" src=${video.authors[0].profile_picture} alt="">
</div>
<div>
<h2 class="font-bold">${video.title}</h2>

<div class="flex items-center gap-2">
    <p class="text-gray-400">${video.authors[0].profile_name}</p>
${video.authors[0].verified == true ? '<img class="w-5" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png" alt="">': ''}
    <p><button onclick="loadDetails('${video.video_id}')" class="btn btn-sm btn-error">Details</button></p>
</div>
  </div>
  </div>
  `;
    videoContainer.append(card);
});
};
document.getElementById("search-input").addEventListener("keyup", (e) =>{
loadVideos(e.target.value);
});
loadCategories();
loadVideos();