// 선택한 챔피언 정보를 이용해 모달을 띄우는 함수
function openChampionModal(key) {
    const champ = champions[key];

    if (!champ) {
        console.error("챔피언 데이터를 찾을 수 없습니다:", key);
        return;
    }

    // 모달 제목 변경
    document.getElementById("modalTitle").textContent =
        `${champ.name}(${champ.eng}) 상세정보`;

    // iframe 경로 변경
    document.getElementById("modalIframe").src =
        `modals/${champ.eng}.html`;

    // 모달 열기
    const modal = new bootstrap.Modal(document.getElementById("championModal"));
    modal.show();
}

// 모든 챔피언 카드 버튼에 addEventListener로 클릭 이벤트를 등록하는 함수
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.btn-outline-light').forEach(btn => {
        btn.addEventListener('click', () => {
            const key = btn.dataset.champ;
            openChampionModal(key);
        });
    });
});
