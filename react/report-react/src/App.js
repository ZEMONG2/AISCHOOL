import { useState } from 'react';
import MemberManagement from './components/MemberManagement';
import MemberInsert from './components/MemberInsert';
import MemberList from './components/MemberList';

const App = () => {
  const [members, setMembers] = useState([
    {
      id: 'admin',
      pw: 12345,
      email: 'admin@example.com',
      gender: '남',
    },
    {
      id: 'test',
      pw: 1234,
      email: 'test@example.com',
      gender: '여',
    },
  ]);

  return (
    <MemberManagement>
      <MemberInsert />
      <MemberList members={members} />
    </MemberManagement>
  );
};

export default App;
