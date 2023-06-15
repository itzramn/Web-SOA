import axios from 'axios';
import { soapResponse } from '../utils';
import { apiUrl } from '../apiUrl';

export const getEmployees = async () => {
   const wcfMethod = 'GetEmployees';

   const xmlBodyStr = `<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <${wcfMethod} xmlns="http://tempuri.org/"/>
  </soap:Body>
</soap:Envelope>`;

   const response = await soapResponse(wcfMethod, xmlBodyStr, []);

   return response;
};

export const createEmployee = async newEmployee => {
   try {
      const response = await axios.post(`${apiUrl}/Employees`, newEmployee);
      return response.data;
   } catch (error) {
      console.log(error);
      return null;
   }
};

export const updateEmployee = async employee => {
   console.log(employee);
   try {
      const response = await axios.post(
         `${apiUrl}/Employees/${employee.employeeId}`,
         employee
      );
      return response.data;
   } catch (error) {
      console.log(error);
      return null;
   }
};

export const deleteEmployee = async employeeId => {
   const wcfMethod = 'DeleteEmployee';

   const xmlBodyStr = `<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <${wcfMethod} xmlns="http://tempuri.org/">
      <employeeId>${employeeId}</employeeId>
    </${wcfMethod}>
  </soap:Body>
</soap:Envelope>`;

   const response = await soapResponse(wcfMethod, xmlBodyStr, null);

   return response;
};
