// const isVarified = "";

// if(isVarified === true){
//     console.log("user is verified");

// }else{
//     console.log("User is not varified");
// }

// console.log(`${isVarified === true ? "user is verified":"User is not varified"}`);

function getTimeString(time){
    // get hour and rest seconds
    const hour = parseInt(time/3600);
    let remainingSeconds = time % 3600;
    const minute = parseInt(remainingSeconds /60);
    remainingSeconds = remainingSeconds % 60;
    return `${hour} hour ${minute} minute ${remainingSeconds} second ago`;
}
console.log(getTimeString(7865));
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