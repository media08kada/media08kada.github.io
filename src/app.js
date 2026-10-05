document.addEventListener('alpine:init', () => {
  Alpine.data('berita', () => ({
  items: [
    { id: 1, nama:'berita-1', img: 'img/berita-1/1A.jpg'},     
    { id: 2, nama:'berita-1', img: 'img/berita-1/2A.jpg'},     
    { id: 3, nama:'berita-1', img: 'img/berita-1/3A.jpg'},     
    { id: 4, nama:'berita-1', img: 'img/berita-1/4A.jpg'},     
    { id: 5, nama:'berita-1', img: 'img/berita-1/5A.jpg'},     
  ],  
  }));
});