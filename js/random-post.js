function randomPost() {
  var posts = [];
  
  fetch('/archives/')
    .then(response => response.text())
    .then(html => {
      var parser = new DOMParser();
      var doc = parser.parseFromString(html, 'text/html');
      var postLinks = doc.querySelectorAll('.article-title a');
      
      postLinks.forEach(link => {
        posts.push(link.href);
      });
      
      if (posts.length > 0) {
        var randomIndex = Math.floor(Math.random() * posts.length);
        window.location.href = posts[randomIndex];
      }
    })
    .catch(error => {
      console.error('Error fetching posts:', error);
    });
}
