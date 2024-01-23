// button.js

// DOM이 준비되면 실행
document.addEventListener("DOMContentLoaded", function() {
    // "downloadButton" 클래스를 가진 모든 요소 선택
    var downloadButtons = document.querySelectorAll('.downloadButton');

    // 이동할 링크 정의
    var targetLink = "https://seungjinbaek.notion.site/seungjinbaek/1b072c03b8ff44dc825d082f4fdb0e61";

    // 버튼 클릭 시 새 창에서 링크 열기
    function handleButtonClick() {
        window.open(targetLink, '_blank');
    }

    // 모든 다운로드 버튼에 클릭 이벤트 추가
    downloadButtons.forEach(function(button) {
        button.addEventListener('click', handleButtonClick);
    });
});

// DOM이 준비되면 실행
document.addEventListener("DOMContentLoaded", function() {
    // "move-btn" 클래스를 가진 모든 요소 선택
    var moveButtons = document.querySelectorAll('.move-btn');

    // 이동할 링크들 정의
    var links = [
        "https://github.com/BaxDailyGit/landing-page",
        "https://github.com/BaxDailyGit/AJouPARKING",
        "https://github.com/BaxDailyGit/GasGuard"
    ];

    // 버튼 클릭 시 해당 링크 새 창에서 열기
    function handleButtonClick(index) {
        window.open(links[index], '_blank');
    }

    // 모든 이동 버튼에 클릭 이벤트 추가
    moveButtons.forEach(function(button, index) {
        button.addEventListener('click', function() {
            handleButtonClick(index);
        });
    });
});
