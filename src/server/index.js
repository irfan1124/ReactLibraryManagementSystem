import app from './app'

app.listen(3000, function (err) {
    if (!err) {
        console.log('😎 Server listening to port 3000.');
    } else {
        console.log('Error starting the server.');
    }
});