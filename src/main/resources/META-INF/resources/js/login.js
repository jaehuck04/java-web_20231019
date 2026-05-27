console.log("login.js loaded");

function validateAndLogin() {
    submitLogin(); // 유효성검사
}

async function submitLogin() {
    const password = document.getElementById('passwordInput').value;
    const hashed = await hashPassword(password);
    document.getElementById('password').value = hashed;
    document.getElementById('loginForm').submit();
}

// login.js 하단에추가
window.addEventListener('load', function () {
    const params = new URLSearchParams(window.location.search);
    const error = params.get('error');
    if (error === '1') {
        /* 여기에코드를작성하시오*/
        // 힌트1 : showError() 함수재활용
        // 힌트2 : 아이디와패스워드중
        //          어느필드에메시지를표시할지 정
        // 힌트3 : 메시지내용
        //          "아이디또는패스워드가올바르지않습니다."
    }
});