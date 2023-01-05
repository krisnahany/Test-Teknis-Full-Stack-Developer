// async function employees() {
//     const response = await fetch('https://dummy.restapiexample.com/api/v1/employees', {
//         method: 'GET',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             'Access-Control-Allow-Headers': '*',
//         },
//         mode: 'cors',
//     })
//     console.log(response);
//     return await response.json();
// }


const getEmployees = async () => {
    try {
        let response = await axios.get('https://dummy.restapiexample.com/api/v1/employees', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        return response.data.data
    } catch (error) {
        console.log(error);
    }
};

window.addEventListener("DOMContentLoaded", async function () {
    let employees = await getEmployees();
    const data = [];
    employees.forEach((d, idx) => {
        // let html = `<tr>
        //             <td>${idx + 1}</td>
        //             <td>${d.employee_name}</td>
        //             <td>${d.employee_age}</td>
        //             <td>${d.employee_salary}</td>
        //         </tr>`
        // data.push(html);

        if (d.employee_age < 25) {
            let newRow = document.createElement("tr");
            Object.values(d).forEach((value) => {
                let cell = document.createElement("td");
                cell.innerText = value;
                newRow.appendChild(cell);
            })
            document.querySelector('.employeeA').appendChild(newRow);
        } else if (d.employee_age >= 25 && d.employee_age <= 50) {
            let newRow = document.createElement("tr");
            Object.values(d).forEach((value) => {
                let cell = document.createElement("td");
                cell.innerText = value;
                newRow.appendChild(cell);
            })
            document.querySelector('.employeeB').appendChild(newRow);
        } else if (d.employee_age > 49) {
            let newRow = document.createElement("tr");
            Object.values(d).forEach((value) => {
                let cell = document.createElement("td");
                cell.innerText = value;
                newRow.appendChild(cell);
            })
            document.querySelector('.employeeC').appendChild(newRow);
        }
    })
})