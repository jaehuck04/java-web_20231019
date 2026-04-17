/* ============================================================
   1. 데이터 정의 (챔피언 / 뉴스)
============================================================ */
const CHAMPIONS = [
    { name: '아트록스', engName: 'Aatrox', role: '전사', lane: '탑', img: 'https://ddragon.leagueoflegends.com/cdn/15.24.1/img/champion/Aatrox.png', difficulty: '상' },
    { name: '사일러스', engName: 'Sylas', role: '마법사', lane: '정글/미드', img: 'https://ddragon.leagueoflegends.com/cdn/15.24.1/img/champion/Sylas.png', difficulty: '중' },
    { name: '애니비아', engName: 'Anivia', role: '마법사', lane: '미드', img: 'https://ddragon.leagueoflegends.com/cdn/15.24.1/img/champion/Anivia.png', difficulty: '상' },
    { name: '브라이어', engName: 'Briar', role: '전사', lane: '정글', img: 'https://ddragon.leagueoflegends.com/cdn/15.24.1/img/champion/Briar.png', difficulty: '중' },
    { name: '잭스', engName: 'Jax', role: '전사', lane: '탑', img: 'https://ddragon.leagueoflegends.com/cdn/15.24.1/img/champion/Jax.png', difficulty: '하' },
    { name: '징크스', engName: 'Jinx', role: '원거리딜러', lane: '원딜', img: 'https://ddragon.leagueoflegends.com/cdn/15.24.1/img/champion/Jinx.png', difficulty: '중' },

    // 추가 챔피언
    { name: '가렌', engName: 'Garen', role: '전사', lane: '탑', img: 'https://ddragon.leagueoflegends.com/cdn/15.24.1/img/champion/Garen.png', difficulty: '하' },
    { name: '니달리', engName: 'Nidalee', role: '마법사/암살자', lane: '미드/정글', img: 'https://ddragon.leagueoflegends.com/cdn/15.24.1/img/champion/Nidalee.png', difficulty: '상' }
];

const NEWS = [
    { title: '새로운챔피언출시', desc: '2026 루나레벨이벤트! 신규챔피언과함께하는특별한시즌.', category: '게임업데이트' },
    { title: '패치노트16.4', desc: '챔피언밸런스및아이템업데이트내용을확인하세요.', category: '패치노트' },
];


/* ============================================================
   2. 화면 전환 관련 함수
============================================================ */

//메인 화면 복귀
function showMainScreen() {
    document.querySelector('.hero').classList.remove('d-none');
    document.querySelectorAll('section').forEach(s => s.classList.remove('d-none'));
    document.getElementById('searchResults').classList.add('d-none');
}

//검색 결과 화면으로 전환
function showSearchScreen() {
    document.querySelector('.hero').classList.add('d-none');
    document.querySelectorAll('section:not(#searchResults)').forEach(s => s.classList.add('d-none'));
    document.getElementById('searchResults').classList.remove('d-none');
    document.getElementById('searchResults').style.display = 'block';
}


/* ============================================================
   3. 카테고리 전환 함수
============================================================ */
function switchCategory(type, el) {
    document.querySelectorAll('.search-category-item').forEach(i => i.classList.remove('active'));
    el.classList.add('active');

    document.getElementById('resultChampion').style.display = type === 'champion' ? 'block' : 'none';
    document.getElementById('resultNews').style.display = type === 'news' ? 'block' : 'none';
}


/* ============================================================
   4. 검색 실행 함수
============================================================ */
function performSearch(query) {
    const q = query.trim().toLowerCase();

    //검색어 없으면 메인 화면 복귀
    if (!q) {
        showMainScreen();
        return;
    }

    document.getElementById('searchKeywordDisplay').textContent = `"${query}"`;

    // 챔피언 검색
    const champResults = CHAMPIONS.filter(c =>
        c.name.includes(q) ||
        c.engName.toLowerCase().includes(q) ||
        c.role.includes(q) ||
        c.lane.includes(q)
    );

    // 뉴스 검색
    const newsResults = NEWS.filter(n =>
        n.title.toLowerCase().includes(q) ||
        n.desc.toLowerCase().includes(q) ||
        n.category.toLowerCase().includes(q)
    );

    // 개수 표시
    document.getElementById('champCount').textContent = `(${champResults.length})`;
    document.getElementById('newsCount').textContent = `(${newsResults.length})`;

    // 챔피언 결과 출력
    const champList = document.getElementById('championResultList');
    champList.innerHTML = champResults.length === 0
        ? `<div class="no-result"><h4>검색결과없음</h4><p>"${query}"에해당하는챔피언이없습니다.</p></div>`
        : champResults.map(c => `
            <div class="search-result-card d-flex align-items-center p-0 overflow-hidden">
                <img src="${c.img}" alt="${c.name}">
                <div class="p-3">
                    <div style="font-weight:700; font-size:1rem; color:#111;">
                        ${c.name} <span style="color:#888; font-size:0.85rem;">(${c.engName})</span>
                    </div>
                    <div style="color:#555; font-size:0.9rem; margin-top:4px;">
                        역할: ${c.role} | 라인: ${c.lane} | 난이도: ${c.difficulty}
                    </div>
                </div>
            </div>
        `).join('');

    // 뉴스 결과 출력
    const newsList = document.getElementById('newsResultList');
    newsList.innerHTML = newsResults.length === 0
        ? `<div class="no-result"><h4>검색결과없음</h4><p>"${query}"에해당하는뉴스가없습니다.</p></div>`
        : newsResults.map(n => `
            <div class="search-result-card p-3">
                <span style="font-size:0.75rem; background:#c8253a; color:#fff; padding:2px 8px; border-radius:3px;">
                    ${n.category}
                </span>
                <div style="color:#555; font-size:0.9rem; margin-top:4px;">${n.desc}</div>
                <div style="font-weight:700; font-size:1rem; color:#111; margin-top:8px;">${n.title}</div>
            </div>
        `).join('');

    //검색 결과 화면으로 전환
    switchCategory('champion', document.querySelector('.search-category-item'));
    showSearchScreen();
}


/* ============================================================
   5. 이벤트 등록
============================================================ */
document.getElementById('searchForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const query = document.getElementById('searchInput').value;
    performSearch(query);
});
