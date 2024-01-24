document.addEventListener("DOMContentLoaded", function () {
    let apiUrl = "https://picsum.photos/v2/list";
    let currentPage = 4;
    let limit = 3;

    // 이미지 가져오기 함수
    async function fetchImages() {
        try {
            const response = await fetch(`${apiUrl}?page=${currentPage}&limit=${limit}`);
            const data = await response.json();

            const apiImgSection = document.querySelector(".list-projects");

            // 가져온 이미지를 화면에 추가
            data.forEach(item => {
                const img = document.createElement("img");
                img.src = item.download_url;
                img.alt = "랜덤 이미지";
                img.onload = function () {
                    img.classList.add("loaded");  // 이미지가 로드되면 "loaded" 클래스 추가
                };
                apiImgSection.appendChild(img);
            });
        } catch (error) {
            console.error("이미지를 불러오는 중 오류 발생:", error);
        }
    }

    // 이미지 미리 로드 함수
    async function preloadImages() {
        const response = await fetch(`${apiUrl}?page=${currentPage}&limit=${limit}`);
        const data = await response.json();

        // 이미지를 미리 로드
        data.forEach(item => {
            const img = new Image();
            img.src = item.download_url;
        });
    }

    // 페이지 로드 시 이미지 미리 로드
    preloadImages();

    const showMoreBtn = document.querySelector(".show-more-btn");

    // '더 보기' 버튼 클릭 이벤트 처리
    showMoreBtn.addEventListener("click", function () {
        showMoreBtn.textContent = "로딩 중...";

        currentPage++;

        // 이미지 가져오기 후 버튼 텍스트 변경
        fetchImages().then(() => {
            showMoreBtn.textContent = "더 보기";
        });
    });
});
