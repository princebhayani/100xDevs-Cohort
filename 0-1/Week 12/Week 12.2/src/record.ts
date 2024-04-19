interface User {
    id: string;
    name: string;
  }
  
  type Users = { [key: string]: User };
  //or
  type Users2 = Record<string, User>;
  
  const users: Users = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
  };