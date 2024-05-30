// button.js

// DOM이 준비되면 실행
document.addEventListener("DOMContentLoaded", function() {
    // "downloadButton" 클래스를 가진 모든 요소 선택
    var downloadButtons = document.querySelectorAll('.downloadButton');

    // 이동할 링크 정의
    var targetLink = "https://baxdailygit.github.io/resume/";

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

    function handleButtonClick(event) {
        var projectId = event.target.getAttribute('data-project');
        var projectModal = document.getElementById('projectModal');
        var projectDetails = projectModal.querySelectorAll('.project-details');

        // 모든 프로젝트 상세 정보 숨기기
        projectDetails.forEach(function(detail) {
            detail.style.display = 'none';
        });

        // 선택된 프로젝트의 상세 정보 표시
        var selectedProject = document.getElementById(projectId);
        selectedProject.style.display = 'block';

        // 모달창 열기
        projectModal.showModal();

        // 배경 스크롤 정지
        document.body.style.overflow = 'hidden';
    }

    // 모달창 닫기 버튼 클릭 시 이벤트 핸들러
    var closeBtn = document.querySelector('.close-btn');

    closeBtn.addEventListener('click', function() {
        var projectModal = document.getElementById('projectModal');
        projectModal.close();

        // 배경 스크롤 복원
        document.body.style.overflow = 'auto';
    });

    // 모달창 외부 클릭 시 모달창 닫기
    var projectModal = document.getElementById('projectModal');
    projectModal.addEventListener('click', function(event) {
        if (event.target === projectModal) {
            projectModal.close();

            // 배경 스크롤 복원
            document.body.style.overflow = 'auto';
        }
    });

    // ESC 키로 모달창 닫기
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            projectModal.close();

            // 배경 스크롤 복원
            document.body.style.overflow = 'auto';
        }
    });

    // 모든 이동 버튼에 클릭 이벤트 추가
    moveButtons.forEach(function(button) {
        button.addEventListener('click', handleButtonClick);
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