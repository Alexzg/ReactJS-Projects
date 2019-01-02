import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'https://udemy-react-burger-proje-2174a.firebaseio.com/'
});

export default axiosInstance;