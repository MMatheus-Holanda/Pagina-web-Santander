const btnDetele = document.querySelector('.btn-delete');
const modalDialog = document.querySelector('.modal-dialog-centered');

function showModalDialog() {    
    modalDialog.classList.remove('hide')
}

function closeModalDialog() {
    modalDialog.classList.add('hide')
}

const btnAdicionar = document.querySelector('.adicionar');
const btnEditar = document.querySelector('.btn-edit');

function goEditPage() {
    window.location.href = "editar.html"
}

// Edit page //

const btnCancel = document.querySelector('.btn-cancel');

function backHomePage() {
    window.location.href = "home.html"
}

const btnSave = document.querySelector('.btn-save');
const modalSaveClient = document.querySelector('.modal-save-client');

function saveClient() {
    modalSaveClient.classList.remove('hide')
}

function closeSaveClient() {
    modalSaveClient.classList.add('hide')
}