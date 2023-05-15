function showPassword() {
    if (document.getElementById('pw').type == 'password') {
        document.getElementById('pw').type = 'text';
        document.getElementById('btn').innerText = 'Hide password';
        document.getElementById('btn').style.color = 'red';

    }
    else {
        document.getElementById('pw').type = 'password';
        document.getElementById('btn').innerText = 'Show password';
        document.getElementById('btn').style.color = 'orange';
    }
}