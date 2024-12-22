import React from 'react';

function Table({ users = [], setUsers }) {
    const deleteUser = (index) => setUsers(users.filter((_,i) => i !== index));

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {users.length > 0 ? (
                    users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                            <td>
                                <button onClick={() => deleteUser(index)}>Удалить</button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td>Таблица пуста</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
