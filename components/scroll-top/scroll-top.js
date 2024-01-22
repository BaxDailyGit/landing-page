// 페이지가 스크롤될 때 이벤트 리스너 등록
window.addEventListener("scroll", function() {
    // 현재 스크롤 위치를 가져오기
    var scrollPosition = window.scrollY;

    // 스크롤 위치가 200px 이상이면 버튼을 표시, 그렇지 않으면 숨김
    if (scrollPosition > 200) {
        document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollToTopBtn").style.display = "none";
    }
});

// 버튼을 클릭했을 때 페이지 상단으로 스크롤
document.getElementById("scrollToTopBtn").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // 부드러운 스크롤 적용
    });
});
