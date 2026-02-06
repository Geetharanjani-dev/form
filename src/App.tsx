import { useState } from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeTable from "./components/EmployeeTable";
import type { Employee } from "./components/types";

const App = () => {
  const [employee, setEmployee] = useState<Omit<Employee, "id">>({
    name: "",
    email: "",
    role: "",
  });

  const [employees, setEmployees] = useState<Employee[]>([]);
  const [editId, setEditId] = useState<number | null>(null);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editId !== null) {
      setEmployees((prev) =>
        prev.map((emp) =>
          emp.id === editId ? { ...emp, ...employee } : emp
        )
      );
      setEditId(null);
    } else {
      setEmployees((prev) => [...prev, { id: Date.now(), ...employee }]);
    }

    setEmployee({ name: "", email: "", role: "" });
  };

  const handleEdit = ({ id, name, email, role }: Employee) => {
    setEmployee({ name, email, role });
    setEditId(id);
  };

  const handleDelete = (id: number) => {
    setEmployees((prev) => prev.filter((e) => e.id !== id));
  };

  const handleCancel = () => {
    setEditId(null);
    setEmployee({ name: "", email: "", role: "" });
  };

  return (
    <div style={{ maxWidth: 600, margin: "40px auto" }}>
      <h2>Employee Management</h2>

      <EmployeeForm
        employee={employee}
        isEditing={editId !== null}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />

      <EmployeeTable
        employees={employees}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default App;
