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

window.addEventListener('load', function () {
    const params = new URLSearchParams(window.location.search);
    const error = params.get('error');

    if (error === '1') {
        showError('passwordMsg', '아이디 또는 패스워드가 올바르지 않습니다.');
    }
});

function showError(elementId, message) {
    const el = document.getElementById(elementId);
    const input = el.previousElementSibling; // 바로 위 input 요소

    el.textContent = message;
    input.classList.add('is-invalid'); // Bootstrap 에러 표시
}


