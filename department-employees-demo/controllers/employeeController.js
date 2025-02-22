import Employee from "../models/employee.js";

export const createEmployee = async(req, res) => {
    try {
        const {name, email, salary, hireDate, department} = req.body;
        const newEmployee = new Employee({name, email, salary, hireDate, department});
        await newEmployee.save();
        res.status(201).json(newEmployee);
    } catch (error) {
        console.log({error});
        res.status(500).json({msg:"Server error!"});
    }
};

export const getAllEmployees = async(req, res) => {
    try {
        const response = await Employee.find();
        res.status(200).json(response);
    } catch (error) {
        console.log({error});
        res.status(500).json({msg:"Server error!"});
    }
};

export const getOneEmployee = async(req, res) =>{
    const {id} = req.params;
    try {
        // const response = await Employee.findById(id);
        // const response = await Employee.findById(id).populate({path:"department", select:"name"});
        // const response = await Employee.findById(id).populate({path:"department"});
        // const response = await Employee.findById(id).populate("department", "name");
        // const response = await Employee.findById(id).populate("department", "name location -_id");
        const response = await Employee.findById(id).populate("department", "-_id");
        res.status(200).json(response);
    } catch (error) {
        console.log({error});
        res.status(500).json({msg:"Server error!"});
    }
}

export const deleteEmployees = async(req, res) => {
    try {
        await Employee.deleteMany();
        res.status(200).json({msg:"All departments removed!"});
    } catch (error) {
        console.log({error});
        res.status(500).json({msg:"Server error!"});
    }
};