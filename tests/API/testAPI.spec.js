import { test, expect } from '@playwright/test';
import getTokenBody from '../../src/requestBody/getTokenBody.json';
import submitOrderBody from '../../src/requestBody/submitOrderBody.json';

const requestTokenEndPoint = '/v2/token';
const submitOrderEndPoint = '/v2/orders';
const getOrderEndPointPr = '/v2/orders';


test('API: Order 6 eSIM cards', async({ request }) => {

  // Get Token
    const token_res = await request.post(requestTokenEndPoint, { 
        data: getTokenBody
    });
    
    // Verfify token request is successfull (responce code is 200)
    expect(token_res.status()).toBe(200);

    // Extract Access Token
    const token_res_json = await token_res.json();
    const access_token = token_res_json.data.access_token;
    console.log(access_token);

  // Submit order, get Order ID
    const order_res = await request.post(submitOrderEndPoint, {
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${access_token}`,
        },
        data: submitOrderBody
    });

    // Verfify order was successfull (responce code is 200)
    expect(order_res.status()).toBe(200);

    // Extract Order ID
    const order_res_json = await order_res.json();
    const order_id = order_res_json.data.id;
    console.log(order_id);

  // Ensure order contain correct data
  
    const orderDetail_res = await request.get(`${getOrderEndPointPr}/${order_id}`, {
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${access_token}`,
        }
    });

    // Verfify order datils requst was successfull (responce code is 200)
    expect(orderDetail_res.status()).toBe(200);

    const orderDetail_res_json = await orderDetail_res.json();
    // Verify order contains 6 eSIMs
    expect(orderDetail_res_json.data.quantity).toEqual(6);
    // Verify all eSIMs have 'merhaba-7days-1gb'
    expect(orderDetail_res_json.data.package_id).toEqual('merhaba-7days-1gb');

});

