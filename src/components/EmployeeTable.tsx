import type { Employee } from "./types";

type Props = {
  employees: Employee[];
  onEdit: (emp: Employee) => void;
  onDelete: (id: number) => void;
};

const EmployeeTable = ({ employees, onEdit, onDelete }: Props) => {
  if (employees.length === 0) return null;

  return (
    <table border={1} width="100%" cellPadding={8}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((emp) => (
          <tr key={emp.id}>
            <td>{emp.name}</td>
            <td>{emp.email}</td>
            <td>{emp.role}</td>
            <td>
              <button onClick={() => onEdit(emp)}>Edit</button>
              <button onClick={() => onDelete(emp.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
