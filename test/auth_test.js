const { expect } = require('chai');
const axios = require('axios');
require('dotenv').config();
describe('Test Authentication', async () => {

    const registerUserSuccess = await axios.post(
        `http://localhost:${process.env.PORT}/api/register`,
        {
            username: 'test',
            email: 'test@demo.com',
            password: '12345678'
        })

    it('Should return registation success', () => {
        expect(registerUserSuccess.data).that.deep.equals({ msg: "Registration Success!" })
    })

    const registerUserFailed = await axios.post(
        `http://localhost:${process.env.PORT}/api/register`,
        {
            username: 'test',
            email: 'test@demo.com',
            password: '12345678'
        })

    it('should return registration failure', () => {
        expect(registerUserFailed.data).that.deep.equals({ msg: "Authentication Failure!" })
    })

    const loginUser = await axios.post(
        `http://localhost:${process.env.PORT}/api/auth`,
        {
            username: 'test',
            password: '12345678'
        }
    )






    it('should return login successful', async () => {
        const data = (await loginUser()).data;
        expect(data.access_token).is.to.be.a
    })



})