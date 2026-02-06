import type { ChangeEvent, FormEvent } from "react";

type Props = {
  employee: Omit<Employee, "id">;
  isEditing: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent) => void;
  onCancel: () => void;
};

import type { Employee } from "./types";

const EmployeeForm = ({
  employee,
  isEditing,
  onChange,
  onSubmit,
  onCancel,
}: Props) => {
  const { name, email, role } = employee;

  return (
    <form
      onSubmit={onSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "12px" }}
    >
      <input name="name" value={name} onChange={onChange} placeholder="Name" />
      <input name="email" value={email} onChange={onChange} placeholder="Email" />
      <input name="role" value={role} onChange={onChange} placeholder="Role" />

      <div style={{ display: "flex", gap: "10px" }}>
        <button type="submit">{isEditing ? "Update" : "Add"}</button>
        {isEditing && (
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default EmployeeForm;
