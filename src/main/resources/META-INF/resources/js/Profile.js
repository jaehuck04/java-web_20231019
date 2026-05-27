window.onload = function () {
    const profileLink = document.getElementById('profileNavLink');
    if (profileLink) {
        new bootstrap.Tooltip(profileLink);
    }


    fetch('/profile/info') // 서버에서사용자정보요청, 비동기i/o
        .then(res => res.json()) // json파싱
        .then(data => {
            // 기존정보테이블표시(유지)
            document.getElementById('infoUsername').textContent = data.username; // DOM 조작방지
            document.getElementById('infoEmail').textContent = data.email;
            document.getElementById('infoPhone').textContent = data.phone;
            if (data.profileImage) { // null 체크
                document.getElementById('profileImg').src =
                    '/uploads/profile/' + data.profileImage;
            }

            // 수정폼에기존값자동채우기
            document.getElementById('updateEmail').value = data.email;
            document.getElementById('updatePhone').value = data.phone;


            if (profileLink) {
                profileLink.setAttribute('data-bs-title', ' ' + data.username);
                new bootstrap.Tooltip(profileLink);
            }
        });

    // URL 파라미터오류감지
    const params = new URLSearchParams(window.location.search);
    const error = params.get('error');
    const success = params.get('success');
    const msgEl = document.getElementById('updateMsg');
    if (success === 'updated') {
        msgEl.className = 'alert alert-success';
        msgEl.textContent = '개인 정보가 수정되었습니다.';
    } else if (error === 'duplicate_email') {
        msgEl.className = 'alert alert-danger';
        msgEl.textContent = '이미 사용중인 이메일입니다.';
    } if (error === 'wrong_password') {
        // ①Toast 먼저(즉각알림)
        showToast('현재 비밀번호가 일치하지 않습니다.', 'danger');
        const pwMsgEl = document.getElementById('pwMsg');
        if (pwMsgEl) {
            pwMsgEl.className = 'alert alert-danger';
            pwMsgEl.textContent = '현재 비밀번호가 일치하지 않습니다.';
        }
    }
    if (error) {
        const messages = {
            'invalid_type': 'jpg, png, gif, webp파일만 가능합니다.',
            'too_large': '파일 크기는5MB 이하여야 합니다.',
            'upload_fail': '업로드 실패. 다시 시도해 주세요.'
        };
        const msg = messages[error];
        const div = document.getElementById('uploadErrorMsg');
        if (msg && div) {
            div.textContent = msg;
            div.classList.remove('d-none');
        }
    }

}



function validateAndUpdate() {
    let valid = true;
    const email = document.getElementById('updateEmail').value.trim();
    const phone = document.getElementById('updatePhone').value.trim();
    // ①이메일형식검사
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showFieldError('updateEmail', 'updateEmailMsg',
            '올바른이메일형식이아닙니다.');
        valid = false;
    } else {
        clearFieldError('updateEmail');
    }// ②연락처형식검사
    const phoneRegex = /^010-\d{4}-\d{4}$/;
    if (!phoneRegex.test(phone)) {
        showFieldError('updatePhone', 'updatePhoneMsg',
            '010-0000-0000 형식으로입력해주세요.');
        valid = false;
    } else {
        clearFieldError('updatePhone');
    }
    if (valid) document.getElementById('updateForm').submit();
}

// profile.js 전용showError / clearError
function showFieldError(fieldId, msgId, message) {
    const field = document.getElementById(fieldId);
    field.classList.add('is-invalid');
    const msg = document.getElementById(msgId);
    if (msg) msg.textContent = message;
}
function clearFieldError(fieldId) {
    const field = document.getElementById(fieldId);
    field.classList.remove('is-invalid');
    field.classList.add('is-valid');
}














