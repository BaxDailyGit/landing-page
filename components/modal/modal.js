// modal.js
function openModal() {
    document.getElementById('myModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

// 모달 외의 영역을 클릭하면 모달이 닫히도록 설정
window.onclick = function(event) {
    if (event.target == document.getElementById('myModal')) {
        closeModal();
    }
};
