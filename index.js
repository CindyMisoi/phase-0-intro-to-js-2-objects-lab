
const employee = {
    name: "Cindy",
    streetAddress: "11 Broadway",
};

function updateEmployeeWithKeyAndValue(employee, key, value){
 const newObject = {...employee};
 newObject[key]=value;
 return newObject;
};

const newEmployee = updateEmployeeWithKeyAndValue(employee,"streetAddress","11 Broadway");
console.log(newEmployee);

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key] = value;
    return employee;
};

const updateEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee,"Sam","12 Broadway");
console.log(updateEmployee);

function deleteFromEmployeeByKey(employee,key,value){
    const newObj = {...employee};
    newObj[key]=value;
    return newObj
};
const deleteEmployee = deleteFromEmployeeByKey(employee,"name","Sam");
delete employee.name;
console.log(deleteEmployee);

function destructivelyDeleteFromEmployeeByKey(employee,key,value){
    employee[key]=value;
    return employee;
};
const deleteEmployeeNonDestuctively = destructivelyDeleteFromEmployeeByKey(employee,"name","Sam");
delete employee.name;
console.log(deleteEmployee);

