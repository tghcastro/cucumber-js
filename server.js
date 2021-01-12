const app = require('./index')

app.listen(7000, (err) => {
    if (err) throw err
    console.log('Server running in http://127.0.0.1:7000')
})