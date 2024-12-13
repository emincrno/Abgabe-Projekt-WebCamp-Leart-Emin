function toggleText(element) {
    element.classList.toggle('active');
}
const toggleButton = document.getElementById('toggleButton');
const text = document.getElementById('text');
const arrow = document.getElementById('arrow');

toggleButton.addEventListener('click', () => {
    if (text.style.display === 'none' || text.style.display === '') {
        text.style.display = 'block';  
        arrow.innerHTML = '&#x2191;';  
    } else {
        text.style.display = 'none';  
        arrow.innerHTML = '&#x2193;';  
    }
});
