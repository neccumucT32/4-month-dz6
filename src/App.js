import './App.css';
import FormPage from "./formPage/FormPage";
import Table from "./table/Table";
import { useState } from 'react';

function App() {
    const [users, setUsers] = useState([]);

    return (
        <div className="App">
            <FormPage setUsers={setUsers} />
            <Table users={users} setUsers={setUsers} />
        </div>
    );
}

export default App;
