console.log("Welcome to My Blog!");

document.querySelector('header').addEventListener('click', () => {
    alert('Thank you for visiting!');
});

document.getElementById('contact-btn').addEventListener('click', function() {
    alert('Thank you for clicking! I will get back to you shortly.');
});
const currentYear = new Date().getFullYear();
document.querySelector('footer p').innerHTML = &copy; ${currentYear} Your Name's Blog;
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
<script>
    function toggleContent() {
        var content = document.getElementById('more-content');
        if (content.style.display === 'none') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    }
</script>