import { useEffect, useState } from "react";
import type { User } from "../types/types";

const Table = () => {
  const [users, setUsers] = useState<User[]>();
  useEffect(() => {
    (async () => {
      const res = await fetch("/src/assets/data/user_data.example.json");
      const data = await res.json();
      setUsers(data);
    })();
  }, []);
  console.log(users);
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Is Active</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr key={user.id} className="hover:bg-base-300">
                <th>{user.id}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={user.image} alt={user.name} />
                      </div>
                    </div>
                    <div className="font-bold">{user.name}</div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>
                  <span
                    className={`badge ${user.isActive ? "badge-success" : "badge-ghost"}`}
                  >
                    {user.isActive ? "Active" : "Inactive"}
                  </span>
                </td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
