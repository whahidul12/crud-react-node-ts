import { useEffect, useState } from "react";

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
      <div className="overflow-x-auto max-w-7xl mx-auto">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Is Active</th>
              <th>Action</th>
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
                <td>{user.designation}</td>
                <td>
                  <span
                    className={`badge ${user.isActive ? "badge-success w-20 py-4" : "badge-outline w-20 py-4 badge-error"}`}
                  >
                    {user.isActive ? "Active" : "Inactive"}
                  </span>
                </td>
                <th>
                  <button className="btn btn-info w-24 py-4 btn-sm">View Details</button>
                </th>
                <th>
                  <button className="btn btn-error text-white w-20 py-4 btn-sm">
                    Delete
                  </button>
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
