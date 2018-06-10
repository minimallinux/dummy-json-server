function() {
fetch('https://jsonplaceholder.typicode.com/posts/2')
  .then(response => response.json())
  .then(json => console.log(json))
}