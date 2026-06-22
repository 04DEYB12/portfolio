// Update date and time
function updateDateTime() {
    const now = new Date();

    const weekday = new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        timeZone: 'Asia/Manila'
    }).format(now);

    const date = new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        timeZone: 'Asia/Manila'
    }).format(now);

    const time = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZone: 'Asia/Manila'
    }).format(now);

    document.getElementById('datetime').textContent =
        `${weekday} : ${date} | ${time}`;
}