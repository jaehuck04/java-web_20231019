function validateAndLogin() {
    submitLogin();
}

async function submitLogin() {
    const password = document.getElementById('passwordInput').value;
    const hashed = await hashPassword(password);

    // 서버로 보낼 hidden input에 해시 저장
    document.getElementById('password').value = hashed;

    document.getElementById('loginForm').submit();
}

// 로그인 에러 처리
window.addEventListener('load', function () {
    const params = new URLSearchParams(window.location.search);
    const error = params.get('error');

    if (error === '1') {
        const pwInput = document.getElementById('passwordInput');
        pwInput.classList.add('is-invalid');
    }
});
