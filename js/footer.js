$(window).load(function () {
    determineCopyrightDate();
})

function determineCopyrightDate() {
    var copyDate = new Date().getFullYear();
    document.getElementById("copyYear").innerText = copyDate.toString();
}