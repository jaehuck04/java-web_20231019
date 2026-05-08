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
