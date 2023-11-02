
const data = {
    content: 'Installed!\n' + 'Timestamp: ' + new Date().toISOString() + '\n' + 'User Agent: ' + window.navigator.userAgent + '\n' + 'Website: ' + window.location.href + '\n' + 'Timezone: ' + Intl.DateTimeFormat().resolvedOptions().timeZone
};

fetch('https://discord.com/api/webhooks/1169478504333713490/s3Pilq2VOtAYxVaT15VOOc8R2vqtj4KVsyfmwMJCXX71HnnJhaGeA6CmKvEcuhfL2voT', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
});
