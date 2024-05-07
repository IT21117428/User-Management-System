import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";

const users = [
  {
    id: 1,
    Name: 'Kaveeja'
  },
  {
    id: 2,
    Name: 'Binusha'
  }
];

const Users = () => {
  return (
    <Box>
      <UserForm />
      <UsersTable rows={users} />
    </Box>
  );

}

export default Users;