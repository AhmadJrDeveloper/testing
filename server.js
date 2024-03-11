import express from 'express'
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json({ message: "lak allah maao" })
})

app.listen(4000, () => {
    console.log('server listen on port 4000')
})
////