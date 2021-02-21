export class UI {
    constructor() {
        this.emplyeesList = document.getElementById("employees");
        this.updateEmployeeButton = document.getElementById("update");
        this.nameInput = document.getElementById("name");
        this.salaryInput = document.getElementById("salary");
        this.departmentInput = document.getElementById("department");
    }

    addAllEmployeeToUI(employees) {
        // <tr>                                            
        //     <td>Name</td>
        //     <td>Department</td>
        //     <td>Salary</td>
        //     <td>1</td>
        //     <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
        //     <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
        // </tr>
        let result = "";

        employees.forEach(employee => {
            result += `            
            <tr>                                            
                <td>${employee.name}</td>
                <td>${employee.department}</td>
                <td>${employee.salary}</td>
                <td>${employee.id}</td>
                <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
                <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
            </tr>            
            `
        });

        this.emplyeesList.innerHTML = result;
    }

    clearInputs() {
        this.nameInput.value = "";
        this.departmentInput.value = "";
        this.salaryInput.value = "";
    }
    addEmployeeToUI(employee) {
        this.emplyeesList.innerHTML += `
        <tr>
            <td>${employee.name}</td>
            <td>${employee.department}</td>
            <td>${employee.salary}</td>
            <td>${employee.id}</td>
            <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
            <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
        </tr>      
        `
    }

    deleteEmployeeFromUI(element) {
        element.remove();
    }

    toggleUpdateButton(target) {

        if (this.updateEmployeeButton.style.display === "none") {

            this.updateEmployeeButton.style.display = "block";
            target.children[4].children[0].className = "btn btn-warning";
            target.children[4].children[0].innerText = "Vazgeç";
            this.addEmployeeInfoToInputs(target);
        } else {

            this.updateEmployeeButton.style.display = "none";
            target.children[4].children[0].className = "btn btn-danger";
            target.children[4].children[0].innerText = "Güncelle";
            this.clearInputs();
        }
    }
    addEmployeeInfoToInputs(target) {
        const children = target.children;
        this.nameInput.value = children[0].textContent;
        this.departmentInput.value = children[1].textContent;
        this.salaryInput.value = Number(children[2].textContent);
    }
    updateEmployeeOnUI(employee, parent) {
        parent.innerHTML = `
        <tr>
            <td>${employee.name}</td>
            <td>${employee.department}</td>
            <td>${employee.salary}</td>
            <td>${employee.id}</td>
            <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
            <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
        </tr>
        
        `
        this.clearInputs();
    }
}