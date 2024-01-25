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


// footer 버튼에 대한 이벤트 핸들러 추가
document.getElementById('blogBtn').addEventListener('click', function() {
    // 새 브라우저 탭에서 블로그로 이동하는 코드
    window.open('https://baxdailygit.github.io/', '_blank');
});

document.getElementById('instagramBtn').addEventListener('click', function() {
    // 새 브라우저 탭에서 인스타그램으로 이동하는 코드
    window.open('https://www.instagram.com/', '_blank');
});

document.getElementById('facebookBtn').addEventListener('click', function() {
    // 새 브라우저 탭에서 페이스북으로 이동하는 코드
    window.open('https://www.facebook.com/?locale=ko_KR', '_blank');
});

document.getElementById('youtubeBtn').addEventListener('click', function() {
    // 새 브라우저 탭에서 유튜브로 이동하는 코드
    window.open('https://www.youtube.com/', '_blank');
});