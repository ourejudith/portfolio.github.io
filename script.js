function toggleNav() {
    const navToggle = document.querySelector('.toggle');
    const nav =
        document.querySelector('.navigation')
    navToggle.classList.toggle('active')
    nav.classList.toggle('active')
}