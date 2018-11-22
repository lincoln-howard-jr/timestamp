const request = require('supertest');
const app = require ('./server.js');

describe ('Test the route GET /timestamp', () => {
  test ('It should respond with status code 200', async (done) => {
    let {statusCode} = await request (app).get ('/timestamp');
    expect (statusCode).toBe (200);
    done ();
  });
})