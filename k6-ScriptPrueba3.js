// Auto-generated by the postman-to-k6 converter

import "./libs/shim/core.js";
import "./libs/shim/expect.js";
import "./libs/shim/urijs.js";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export let options = { maxRedirects: 4 };

const Request = Symbol.for("request");
postman[Symbol.for("initial")]({
  options,
  environment: {
    Token:
      "eyJhbGciOiJSUzI1NiIsImtpZCI6IkQ3OTkxNEU2MTJFRkI4NjE5RDNFQ0U4REFGQTU0RDFBMDdCQjM5QjJSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6IjE1a1U1aEx2dUdHZFBzNk5yNlZOR2dlN09iSSJ9.eyJuYmYiOjE2Nzk2Njk0NDYsImV4cCI6MTY3OTc1NTg0NiwiaXNzIjoiaHR0cDovL21zLXNlY3VyaXR5c2VydmljZTo1MDAwIiwiYXVkIjoiaHR0cDovL21zLXNlY3VyaXR5c2VydmljZTo1MDAwL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IlNpaWdvV2ViQWNjb3VudGluZyIsInN1YiI6IjEyNDA3NzkiLCJhdXRoX3RpbWUiOjE2Nzk2Njk0NDYsImlkcCI6ImxvY2FsIiwibmFtZSI6ImFkbWluQGNhbmFyeXBpbG90by5jb20iLCJtYWlsX3NpaWdvIjoiYWRtaW5AY2FuYXJ5cGlsb3RvLmNvbSIsImNsb3VkX3RlbmFudF9jb21wYW55X2tleSI6ImNhbmFyeXBpbG90byIsInVzZXJzX2lkIjoiMzQ2NjIiLCJ0ZW5hbnRfaWQiOiIweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNDc3NDkzIiwidXNlcl9saWNlbnNlX3R5cGUiOiIwIiwicGxhbl90eXBlIjoiMTQiLCJ0ZW5hbnRfc3RhdGUiOiIxIiwibXVsdGl0ZW5hbnRfaWQiOiI1NjIiLCJjb21wYW5pZXMiOiIxIiwiYXBpX3N1YnNjcmlwdGlvbl9rZXkiOiIiLCJhY2NvdW50YW50IjoiZmFsc2UiLCJqdGkiOiJCMDMxNUY3RjUwOTJCNzQ5OTQ5NjIyMjg3ODM2Nzc4NSIsImlhdCI6MTY3OTY2OTQ0Niwic2NvcGUiOlsiV2ViQXBpIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbImN1c3RvbSJdfQ.FEYNQ7Cyoy59-OygICCrPaGuYk4Domf6Sfqrv3TzThahcCWNkOPFrlbQiuCGFkPBvQWDielMzFokbfdSgTI2YZIho93JhTTN9TLNAkDLO7GVOhtRvOWaeWvmZOW6RIdCyewYDS4v1nB_3lZzhPEIIZxTvAP-0fZt8KCJmQgmJdFprz7rEN3PbEZ3gefujtmvCjAahn3J3rLuPiTZk20bmeYKgLXjUVmbVc5iFGe0A7nIeXq3l4H93sg2RAQS6wHDSy8b2oIe68Pi_VL62uwe9tfV_GCdat80hYBRbM_0f51gdc0nCjdiaHfK6WmwFxdnK3gYtSp_R-BgrT8vYEUJyw",
    url: "https://services2.siigo.com/metrics/api/access",
    responseTime: "1000"
  }
});

export default function() {
  postman[Request]({
    name: "02_create_session_log",
    id: "d60914db-11f2-49fe-9a34-6e4cfc367d3a",
    method: "POST",
    address: "{{url}}/sessionLog",
    data:
      '{\r\n  "SessionID": "string",\r\n  "ServerName": "string",\r\n  "ServerIP": "string",\r\n  "ServerURL": "string",\r\n  "ClientName": "string",\r\n  "ClientIP": "string",\r\n  "UsersName": "string",\r\n  "UsersCode": 2,\r\n  "LoginSuccessfully": true\r\n}',
    headers: {
      Authorization: "{{Token}}",
      "Content-Type": "application/json"
    },
    post(response) {
      var jsonData = pm.response.json();
      var regex = /^[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$/;

      pm.test("Status code is 200", function() {
        pm.response.to.have.status(200);
      });

      pm.test("Response time is less than 1 second", function() {
        pm.expect(pm.response.responseTime).to.be.below(
          parseInt(pm.environment.get("responseTime"))
        );
      });

      pm.test("Response time is less than 2 second", function() {
        pm.expect(pm.response.responseTime).to.be.below(200);
      });

      pm.test("Valid GUID length", function() {
        pm.expect(jsonData.length).to.equal(36);
      });

      //Test Guid is not null
      pm.test("SessionLog GUID is not null", function() {
        pm.expect(jsonData).not.eql(null);
      });

      //Test Guid is not 0
      pm.test("SessionLog GUID is not 0", function() {
        pm.expect(jsonData).not.eql(0);
      });

      //Test Guid has a GUID format
      pm.test("SessionLog GUID has valid format", function() {
        pm.expect(regex.test(jsonData));
      });
      //console.log(jsonData);
    }
  });
}

//Aqui exportamos el reporte en formato HTML

export function handleSummary(data) {

    return {
  
      "k6-ResponsePrueba3-user500.html" : htmlReport(data),
  
    };
  
  }
