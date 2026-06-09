// 다크/라이트 모드 상태에 따라 UI를 업데이트하는 함수
function updateTheme() {
    const body = document.body;
    const btn = document.getElementById('themeToggleBtn');
    const navbar = document.querySelector('.navbar');

    // 현재 body가 light-mode 클래스를 가지고 있으면 → 라이트 모드
    if (body.classList.contains('light-mode')) {
        sessionStorage.setItem('theme', 'light');
        btn.textContent = 'LIGHT';
        navbar.classList.remove('navbar-dark', 'bg-dark');
        navbar.classList.add('navbar-light', 'bg-light');
    } else {
        // light-mode 클래스가 없으면 → 다크 모드
        btn.textContent = 'DARK';
        sessionStorage.setItem('theme', 'dark');
        navbar.classList.remove('navbar-light', 'bg-light');
        navbar.classList.add('navbar-dark', 'bg-dark');
    }
}

// 버튼 클릭 시 라이트 모드 클래스를 토글하고 테마 업데이트
function toggleTheme() {
    document.body.classList.toggle('light-mode');
    updateTheme();
}

// 새로고침 시 저장된 테마가 'light'이면 라이트 모드 적용
if (sessionStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
    updateTheme();
}
