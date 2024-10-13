import axios from 'axios';
// const API_URL = "192.168.100.42:3001"
const API_URL = "192.168.50.105:3001" 

const loginClient = async (phone: string) => {
  const response = await axios.post(`http://${API_URL}/api/client/login`, {
    phone: phone,
  });
  return response.data;
};

const confirmOtp = async ({ otpCode, phone }: { phone: string, otpCode: string }) => {
  console.log(`http://${API_URL}/api/client/confirm-otp`);

  const response = await axios.post(`http://${API_URL}/api/client/confirm-otp`, {
    phone, otpCode
  });
  return response.data;
};

export { loginClient, confirmOtp };