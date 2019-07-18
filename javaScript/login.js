$(function () {
    if (localStorage.getItem("txtName") == null) {
        //$('#signin').prop("disabled",true);
        document.getElementById("signin").disabled = true;
    } else {
        //$('#signup').prop("disabled",true);
        document.getElementById("signup").disabled = true;
    }
})
function clickLoginButton () {
    var txtName;
    var txtPass;
    var db;
    var request = indexedDB.open('hhsw');
    request.onsuccess = function (event){
        db = event.target.result;
        var ts = db.transaction(["store1"], "readwrite");
        var store = ts.objectStore("store1");
        var requestName = store.get('txtName');
        requestName.onsuccess = function(event){
            txtName = event.target.result.myvalue;
        }
        var requestPass = store.get('txtPass');
        requestPass.onsuccess = function(event){
            txtPass = event.target.result.myvalue;
        }
    }
        if ($('#txtUserName').val()!=txtName) {
            alert('Not registered');
            return;
        }
        if ($('#txtPass').val()!=txtPass) {
            alert('Password is not confirmed');
            return;
        }
        location.href='menu.html';
}
