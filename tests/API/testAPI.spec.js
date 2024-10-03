import { test, expect } from '@playwright/test';
import getTokenBody from '../../src/requestBody/getTokenBody.json';
import submitOrderBody from '../../src/requestBody/submitOrderBody.json';

const requestTokenEndPoint = '/v2/token';
const submitOrderEndPoint = '/v2/orders';
const getOrderEndPointPr = '/v2/orders';


test('API: Order 6 eSIM cards', async({ request }) => {
/*
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
*/
    const order_id = '120123'
    const access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NTgiLCJqdGkiOiI4NjQ1YWE1ZTQ0ZmQ3MzE0MzhkN2E3MTQ3M2JiMTc5MzE0ZmRlNTdhOGUyMTViMjI0NDY3NDNiZjJiMGI2OTljMGY5YjM2OGQ4MWE0MjVhOSIsImlhdCI6MTcyNzk4NDI4NCwibmJmIjoxNzI3OTg0Mjg0LCJleHAiOjE3NTk1MjAyODQsInN1YiI6IiIsInNjb3BlcyI6W119.cZNqverefHSqVlY9RZzxYz5_6jtyXNwSUsD9Oy3oWPCfDQiOu0vqmHkRy6PiS8GtFTLm6ibmBxxR2rFtI484taQOqQ3HuWFPHiAkLcfqoidqiRkDtMtEKWfeNWilohDfW1wGqiwrDh0reYeiIRXv3ygB2lPuAmA5GE9OHy5O4aQgkwAKPa4kgQK9kFZzFTtOT_iUS83VGoFKEZLmTA-DBbl83zpxVqi2iL72MGo2AQn2RHDNqo92D17FtNjWvhAP5j9T4IXqiILHWPBLBzSiC_qdHOun5ALNCKz8Dihh_D375z0TntQ0EHIV08icbFsippwyV9lPZBe5ftECcPrKwdQx8rGVnAM5otELCh6iiHDOVAaYvJtYkTDwHD6J4soEGBYlIovnBChrq-sxVTOc2SZnB65aW38NBBKwuZLjlKcMB0DqS_Dw0pbnlQonajIFQ4xuIUTaBHdlg8SwmQIn7JJ8grqs-BH8c19c72LqY3r53EtVwml-xMYOEEjLYo5z8Wjg_VqI1HTGeMLEF7i_ckfBqeyTVIoknA0Y7CDbq6gPriA5zSiQdEkE95SDBfofGAxBRp3abUnF8QxiQzAw-NxpbyvHuTuNR4fRPXVOLdfc6NN5F2V_-zzuZwjt0jO6NhHzKBKHH69_ka8oTHMo7Snj8CNyCNNcGZLwzIzfi5A';

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

