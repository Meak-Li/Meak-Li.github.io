var posts=["2023/09/13/hello-world/","2023/09/13/remaind/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};