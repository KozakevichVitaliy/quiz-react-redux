import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-5ab6f.firebaseio.com'
})