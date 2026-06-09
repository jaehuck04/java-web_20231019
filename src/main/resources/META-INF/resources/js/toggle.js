// [기존] 다크/라이트 모드 토글 함수
function updateTheme() {
    const body = document.body;
    const btn = document.getElementById('themeToggleBtn');
    const navbar = document.querySelector('.navbar');


    if (body.classList.contains('light-mode')) {
        sessionStorage.setItem('theme', 'light');
        btn.textContent = 'LIGHT';
        navbar.classList.remove('navbar-dark', 'bg-dark');
        navbar.classList.add('navbar-light', 'bg-light');
    } else {
        btn.textContent = 'DARK';
        sessionStorage.setItem('theme', 'dark');
        navbar.classList.remove('navbar-light', 'bg-light');
        navbar.classList.add('navbar-dark', 'bg-dark');
    }
}

function toggleTheme() {
    document.body.classList.toggle('light-mode');

    updateTheme();
}

if (sessionStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
    updateTheme();
}
