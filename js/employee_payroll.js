class employee_payroll {
    id;
    name;
    salary;
    gender;
    startDate;


constructor(id,name,salary,gender,startDate)
{
    this.id= id;
    this.name=name;
    this.salary=salary;
    this.gender=gender;
    this.startDate = startDate;
}

get name() {
    return this.name;
}
set name(name)
{
    let nameRegex = regExp('^[A-Z]{1}[a-z]{3,}$');
    if(nameRegex.test(name))
        this._name = name;
        else throw 'Name is Incorrect!';
}
toString()
{
    const options = {year: 'numeric' , month: 'long', day: 'numeric'};
    const empData = !this.startup?"undefined" :
                    this.startDate.toLocalDataString("en-US",option);
    return "id=" + this.id +", name="
 + this.name + ", salary=" + this.salary + "," + "gender="+this.gender +"startDate = "+this.startDate}
}

const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function() {
    output.textContent = salary.value;

});