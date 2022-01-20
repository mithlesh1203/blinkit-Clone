const connect = require('./configs/db');

const app = require('./index');

app.listen(8001, async () => {
    try {
        await connect();
        console.log('Listening at port 8001');
    }
    catch (e) {
        console.log(e.message);
    }
});
