// [기존] 다크/라이트 모드 토글 함수
function toggleTheme() {
    const body = document.body;
    const btn = document.getElementById('themeToggleBtn');
    const navbar = document.querySelector('.navbar');

    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
        btn.textContent = 'LIGHT';
        navbar.classList.remove('navbar-dark', 'bg-dark');
        navbar.classList.add('navbar-light', 'bg-light');
    } else {
        btn.textContent = 'DARK';
        navbar.classList.remove('navbar-light', 'bg-light');
        navbar.classList.add('navbar-dark', 'bg-dark');
    }
}

// [추가] 인라인 onclick 제거 → 이벤트 리스너 방식
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById('themeToggleBtn');
    btn.addEventListener('click', toggleTheme);
});