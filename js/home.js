window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});
// Template literal ES6 feature 
const createInnerHtml = () => {
    const headerHtml ="<th></th><th>Name</th><th>Gender</th><th>Department</th>" + "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    let empPayrollData = creteEmployeePayrollJSON()[0];
    const innerHtml = `${headerHtml}
<tr>

<td><img class="profile" src="${empPayrollData._profilePic}" alt=""></td>

<td>${empPayrollData._name}</td>

<td>${empPayrollData._gender}</td>

<td>

<div class='dept-label>${empPayrollData._department [0]}</div>

<div class='dept-label'>${empPayrollData._department [1]}</div>

</td>

<td>${empPayrollData._salary}</td>

<td>${empPayrollData._startDate}</td>

<td>

<img name="${empPayrollData._id}" onclick="remove(this)" src=

"/asserts/icons/delete-black-18dp.svg" alt="delete"> 

<img name="${empPayrollData._id}" onclick="update(this)"

src="/asserts/icons/create-black-18dp.svg" alt="edit">

</td>
</tr>
`;
document.querySelector('#table-display').innerHTML = innerHtml;
}


const creteEmployeePayrollJSON = () => { 
    let empPayrollListLocal = [

    {
    
    _name: 'Nikita Rai',
    
    _gender: 'Male',
    
    _department: [ 'Engineering',
    
    'Finance'
    ],
    _salary: '500000',
    
    _startDate: '29 Oct 2019',
    
    _note: '',
    
    _id: new Date().getTime(),
    
    _profilePic: '/asserts/profile-images/Ellipse -2.png'
},
{
    
    _name: 'Amarpa Shashanka Keerthi Kumar',
    
    _gender: 'female',
    
    _department:
    [
    
    'Sales'
    ],
    
    _salary: 400800, 
    _startDate: '29 Oct 2019',
    
    _note: '',
    id: new Date().getTime() +1, _profilePic: '/asserts/profile-Images/Ellipse -1.png'
    
    
    }
    ];
    
    return empPayrollListLocal;
}

// let innerHtml=`$(headerHtml)`;
    /**
     * UC 4-5
     */
   /* const innerHtml = `${headerHtml}

 <tr>

<td><img class="profile" src="/asserts/profile-images/Ellipse -2.png" alt <td>Nandan Rai</td>
<td>Nandan Rai</td>
<td>Female</td>
<td><div class='dept-label'>HR</div></td>
<td>2000000</td>
<td>3 Nov 2020</td>

<td>
    <img name="1" onclick="remove(this)" src="/asserts/icons/delete-black-18dp.svg" alt="delete"> 
    <img name="1" onclick="update(this)" src="/asserts/icons/create-black-18dp.svg" alt="edit">
</td>
</tr>
`; */
