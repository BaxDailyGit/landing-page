document.addEventListener("DOMContentLoaded", function () {
    // API 엔드포인트와 초기 페이지 및 이미지 수 설정
    let apiUrl = "https://picsum.photos/v2/list";
    let currentPage = 1;
    let limit = 3;

    // 함수를 통해 API에서 이미지 가져오기
    function fetchImages() {
        fetch(`${apiUrl}?page=${currentPage}&limit=${limit}`)
            .then(response => response.json())
            .then(data => {
                // 가져온 데이터를 이용하여 이미지 동적으로 추가
                const apiImgSection = document.querySelector(".projects-api");

                data.forEach(item => {
                    const img = document.createElement("img");
                    img.src = item.download_url;
                    img.alt = "Random Image";
                    apiImgSection.appendChild(img);
                });
            })
            .catch(error => console.error("Error fetching images:", error));
    }

    // 초기 로딩 시 이미지 가져오기
    fetchImages();

    // 더보기 버튼 클릭 시 다음 페이지의 이미지 가져오기
    const showMoreBtn = document.querySelector(".show-more-btn");
    showMoreBtn.addEventListener("click", function () {
        // 다음 페이지 설정
        currentPage++;
        // 이미지 추가
        fetchImages();
    });
});