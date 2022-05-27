var smth = document.querySelectorAll('.liveToastClick')
var toastLiveExample = document.getElementById('liveToast')
for (var i = 0; i < smth.length; i++) {
    smth[i].addEventListener('click', function () {
        var toast = new bootstrap.Toast(toastLiveExample)
        toast.show()
    })
}