
interface User {
    avatar: string | undefined;
    username: string;
    email: string;
    password: string;
    phone: string;
    address: string;
    city: string;
    isAdmin?: boolean;
    job?: string;
  }
  
  export default User;
  

