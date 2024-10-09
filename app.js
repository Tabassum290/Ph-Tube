// 1=fetch,load and show categories on html
// create loadcategories
const loadCategories = () => {
// fetch the data
fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
.then((res) => res.json())
.then((data) => displayCategories(data.categories))
.catch((error) => console.log(error));
};
// create displaycategories
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById("categories");
    categories.forEach((item) => {
        console.log(item);
        // create a button
        const button = document.createElement("button");
button.classList = 'btn';
button.innerText = item.category;
// add button to category container
categoryContainer.append(button);
    });
};
// videoload 
const loadVideos = () => {
    // fetch the video
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos))
    .catch((error) => console.log(error));
    };
// showdemo
// const cardDemo = {
// "category_id": "1001",
//         "video_id": "aaaa",
//         "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//         "title": "Shape of You",
//         "authors": [
//             {
//                 "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//                 "profile_name": "Olivia Mitchell",
//                 "verified": ""
//             }
//         ],
//         "others": {
//             "views": "100K",
//             "posted_date": "16278"
//         },
//         "description": "Dive into the rhythm of 'Shape of You, "

// }
// create displayvideos
const displayVideos = (videos)=> {
const videoContainer = document.getElementById("videos");
videos.forEach(video => {
    console.log(video);
    const card = document.createElement("div");
    card.classList = "card card-compact";
    card.innerHTML =`
    <figure class="h-[200px]">
    <img class="h-full w-full object-cover"
      src=${video.thumbnail} alt="Shoes" />
  </figure>
  <div class="py-2 flex gap-2">
<div>
    <img class="w-10 h-10 rounded-full object-cover" src=${video.authors[0].profile_picture} alt="">
</div>
<div>
    <h2 class="font-bold">${video.title}</h2>
    <div class="flex items-center gap-2">
    <p class="text-gray-400">${video.authors[0].profile_name}</p>
<img class="w-5" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png" alt="">
    <p></p>
</div>
  </div>
  </div>
  `;
    videoContainer.append(card);
});
};

loadCategories();
loadVideos();