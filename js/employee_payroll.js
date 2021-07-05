window.addEventListener('DOMContentLoaded', (event) => {
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function() {
        output.textContent = salary.value;
    });
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function() {
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            let employeePayrollData = new EmployeePayrollData();
            employeePayrollData.name = name.value;;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });
    startDate.addEventListener('input', function() {
        if (startDate.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            let employeePayrollData = new EmployeePayrollData();
            employeePayrollData.startDate = startDate.value;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });

    
});

const save = () => {
    try {
        let employeePayrollData = createEmployeepayrolldata();
        createAndUpdateStorage(employeePayrollData);
    } catch (e) {
        return;
    }
}

function createAndUpdateStorage(employeePayrollData) {
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
    if (employeePayrollList != undefined) {
        employeePayrollList.push(employeePayrollData);
    } else {
        employeePayrollList = [employeePayrollData]
    }
    alert(employeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList))
}

const createEmployeepayrolldata = () => {
    let employeePayrollData = new EmployeePayrollData();
    try {
        employeePayrollData.name = getInputValueById('#name');
    } catch (e) {
        setTextValue('.text-error', e);
        throw e;
    }
    employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
    employeePayrollData.department = getSelectedValues('[name=department]');
    employeePayrollData.salary = getInputValueById('#salary');
    employeePayrollData.note = getInputValueById('#notes');
    let date = getInputValueById('#day') + " " + getInputValueById('#month') + " " +
        getInputValueById('#year');
   if( employeePayrollData.StartDate = Date.parse(date))
    alert(employeePayrollData.toString());
    return employeePayrollData;
}

const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let selItem = [];
    allItems.forEach(item => {
        if (item.checked) selItem.push(item.value);
    });
    return selItem;
}

/**
 * 1: querySelector is the newer feature.
 * 2: The querySelectore method can be used when selectin by element name,
 *    nesting, or class name.
 * 3: querySelector lets you find elements with rules that can,t be expressed with getElementbyId
 */
const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

/**
 * 1: getElementById is better supported than  querySelector in older versions of the browsers.
 * 2: The thing with getElementById is that it only allows to select an element by its id.
 */
const getInputElementValue = (id) => {
    let value = document.getElementById(id).value;
    return value;
}

const resetFor = () => {
    setValue('#name', '');
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name=department]');
    setValue('#salary', '');
    setValue('#notes', '');
    setValue('#day', '1');
    setValue('#month', 'January');
    setValue('#year', '2020');
}

const unsetSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item => {
        item.checked = false;
    });
}

const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}

const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}