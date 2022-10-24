async function timer() {
    var idleTime = 0;
    document.ready(function () {
        function timerIncrement() {
            idleTime = idleTime + 1;
            if (idleTime > 0) { // 1 minutes
                // window.location.reload();
                async function logout() {
                    const response = await fetch('/api/users/logout', {
                        method: 'post',
                        headers: { 'Content-Type': 'application/json' }
                    });
                
                    if (response.ok) {
                        document.location.replace('/');
                    } else {
                        alert(response.statusText);
                    }
                }
                logout;
            }
        }
        // Increment the idle time counter every minute.
        var idleInterval = setInterval(timerIncrement, 60000); // 1 minute

        // Zero the idle timer on mouse movement.
        document.mousemove(function (e) {
            idleTime = 0;
        });

        document.keypress(function (e) {
            idleTime = 0;
        });
    })
};

async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/dashboard');
            timer();
        } else {
            alert(response.statusText);
        }
    }
}

async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        // check the response status
        if (response.ok) {
            console.log('success');
            document.location.replace('/dashboard');
            timer();
        } else {
            alert(response.statusText);
        }
    }
}
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);