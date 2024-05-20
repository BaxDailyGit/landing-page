// email.js

function openEmailClient() {
var recipientEmail = 'qortmdwls275@naver.com';
var subject = '제목을 입력하세요';  // 이 부분에 이메일의 제목을 지정할 수 있습니다.

// mailto 링크 생성
var mailtoLink = 'mailto:' + recipientEmail + '?subject=' + encodeURIComponent(subject);

// 새 창에서 이메일 클라이언트 열기
window.location.href = mailtoLink;

// 모달 띄우기
openModal();
}

function openModal() {
var modal = document.getElementById('myModal');
modal.style.display = 'block';
}

function closeModal() {
var modal = document.getElementById('myModal');
modal.style.display = 'none';
}
