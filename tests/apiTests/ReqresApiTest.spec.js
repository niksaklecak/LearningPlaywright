const { test, expect } = require('@playwright/test');

test('My first api Test', async ({ request }) => {


    const baseURL = 'https://reqres.in';

    const listAllUsersResponse = await request.get(`${baseURL}/api/users`, {
    headers: {
        'Content-Type': 'application/json'
    },
    params: {
        page: '2'
    }
    });


    const responseBody = await listAllUsersResponse.json();

    await expect(responseBody.page).toBe(2);
    await expect(responseBody.per_page).toBe(6);
    await expect(responseBody.total).toBe(12);
    await expect(responseBody.total_pages).toBe(2);

    for (const user of responseBody.data) {
        expect(user).toHaveProperty('id');
        expect(user).toHaveProperty('email');
        expect(user).toHaveProperty('first_name');
        expect(user).toHaveProperty('last_name');
        expect(user).toHaveProperty('avatar');
      }
      
      expect(responseBody.support).toHaveProperty('url');
      expect(responseBody.support).toHaveProperty('text');


    const users2InfoResponse = await request.get(`${baseURL}/api/users/2`);

    console.log( await users2InfoResponse);

    const createUserResponse = await request.post(`${baseURL}/api/users`, {
        data: {
            name: 'John',
            job: 'Tester'
        }
    });

    console.log(await createUserResponse.body);

    const eraseUserResponse = await request.delete("https://reqres.in/api/users/2");

    console.log(await eraseUserResponse.body);

    const registerUnsuccessfullyResponse = await request.post(`${baseURL}/ api/register`, {
        data: {
            email: 'test@qa'
        }
    });

    console.log(await registerUnsuccessfullyResponse.body);

});


