const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect('/login');
    } else {
        next();
    }
};

const timer = () => {
    var idleTime = 0;
    $(document).ready(function () {
        function timerIncrement() {
            idleTime = idleTime + 1;
            if (idleTime > 0) { // 1 minutes
                // window.location.reload();
                res.redirect('/login');

            }
        }

        // Increment the idle time counter every minute.
        var idleInterval = setInterval(timerIncrement, 60000); // 1 minute

        // Zero the idle timer on mouse movement.
        $(this).mousemove(function (e) {
            idleTime = 0;
        });

        $(this).keypress(function (e) {
            idleTime = 0;
        });
    })
};

module.exports = { withAuth, timer };