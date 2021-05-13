window.onload = () => {
    $('#txtCep').mask("00000-000");
}
document.querySelector('#btnConsultarCep').onclick=function(e){
    e.preventDefault();
    disableButtonTemporarily();
    clearElement('tableCepInfos');
    clearElement('boxMap');
    hideElement('boxTable');
    hideElement('boxMap');
    resetFooterDefinitions();
    ajaxConsultarCep();
}
function ajaxConsultarCep() {
    const inputValue = getValueInputAndRemoveHyphen('#txtCep');
    $.ajax({
        url: '/ConsultarCep',
        data: {
            cep: inputValue
        },
        method: 'GET',
        contentType: 'application/json',
        success: function (response) {
            if (response.erro) {
                showElement('errorCep');
            }
            else {
                hideElement('errorCep');
                showElement('boxTable');
                showElement('boxMap');
                setFooterRlativePosition()
                setElementDisplayFlex('boxTable');
                fillTableOfCep(response)
                loadMap(response.logradouro, response.localidade)
            }
        },
        error: function (response) {
            showElement('errorCep');
        }
    })
}
function getValueInputAndRemoveHyphen(inputId) {
    return $(inputId).val().replace('-', '')
}
function setFooterRlativePosition() {
    document.getElementById("footer").style.position = 'relative';
}
function showElement(idElement) {
    $(`#${idElement}`).show();
}
function hideElement(idElement) {
    $(`#${idElement}`).hide();
}
function clearElement(idElement) {
    $(`#${idElement}`).html('');
}
function setElementDisplayFlex(idElement) {
    $(`#${idElement}`).css('display', 'flex');
}
function resetFooterDefinitions() {
    $('footer').css('position', 'absolute');
    $('footer').css('top', '100%')
}
function fillTableOfCep(response) {
    $.each(response, (key, item) => { $('#tableCepInfos').append(getTrTextHtml(key, item)) })
}
function getTrTextHtml(key, item) {
    return `<tr>
                <td class="tdStyle">
                    <label class="labelTable">${key.toString().toUpperCase()}</label>
                </td>
                <td class="tdStyle">
                    <label class="labelTable">${item}</label>    
                </td>
            </tr>`
}
function disableButtonTemporarily() {
    $('#btnConsultarCep').attr('disabled', 'true');
    setTimeout(() => {
        $('#btnConsultarCep').removeAttr('disabled');
    }, 5000);
}