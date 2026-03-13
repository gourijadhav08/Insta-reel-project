const reels = [
  {
    username: "code_with_raj",
    likeCount: 1240,
    isLike: false,
    commentCount: 86,
    video: "dark.mp4",
    userProfile: "raj_profile.jpg",
    shareCount: 54,
    isFollowed: true

  },
  {
    username: "dev_girl_anu",
    likeCount: 3421,
    isLike: true,
    commentCount: 210,
    video: "nature2.mp4",
    userProfile: "anu_profile.jpg",
    shareCount: 130,
    isFollowed: false
  },
  {
    username: "frontend_master",
    likeCount: 985,
    isLike: false,
    commentCount: 42,
    video: "nature.mp4",
    userProfile: "frontend_profile.jpg",
    shareCount: 21,
    isFollowed: false
  },
  {
    username: "js_ninja",
    likeCount: 5620,
    isLike: true,
    commentCount: 390,
    video: "friends.mp4",
    userProfile: "js_profile.jpg",
    shareCount: 250,
    isFollowed: true
  },
  {
    username: "design_hub",
    likeCount: 1740,
    isLike: false,
    commentCount: 73,
    video:"family.mp4" ,
    userProfile: "design_profile.jpg",
    shareCount: 61,
    isFollowed: false
  }
];

let sum = "";

reels.forEach(function(elem){

sum += `<div class="reel">

<video autoplay muted src="${elem.video}"></video>

<div class="bottom">

<div class="user">

<img src="https://plus.unsplash.com/premium_photo-1682096515837-81ef4d728980?q=80&w=1170" alt="">

<h4>${elem.username}</h4>

<button>${elem.isFollowed ? "Following" : "Follow"}</button>

</div>

<h3>Want More information about post</h3>

</div>

<div class="right">

<div class="like">
<h4 class="like-icon"><i class="ri-heart-3-line"></i></h4>
<h6>${elem.likeCount}</h6>
</div>

<div class="comment">
<h4 class="comment-icon"><i class="ri-chat-1-line"></i></h4>
<h6>${elem.commentCount}</h6>
</div>

<div class="share">
<h4 class="share-icon"><i class="ri-share-forward-line"></i></h4>
<h6>${elem.shareCount}</h6>
</div>

<div class="save">
<h4 class="save-icon"><i class="ri-bookmark-line"></i></h4>
<h6>20</h6>
</div>

<div class="menu">
<h4 class="menu-icon"><i class="ri-more-2-line"></i></h4>
</div>

</div>

</div>`

})

var allreel = document.querySelector('.all-reel')

allreel.innerHTML = sum

