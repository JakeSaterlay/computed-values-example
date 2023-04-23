import { ChangeEvent, useState } from "react";

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
}

function App() {
  const [user, setUser] = useState<IUser>({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div>
        <span>First Name:</span>
        <input name="firstName" onChange={handleInputChange} />
      </div>
      <div>
        <span>Last Name:</span>
        <input name="lastName" onChange={handleInputChange} />
      </div>
      <div>
        <span>Email Name:</span>
        <input name="email" onChange={handleInputChange} />
      </div>
    </>
  );
}

export default App;
