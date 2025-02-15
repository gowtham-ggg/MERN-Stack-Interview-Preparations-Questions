import React, { useState } from 'react';
import { useAppContext } from '../contextApi/AppContext';

const Card = () => {
    const { userData, updateData } = useAppContext();
    const [editId, setEditId] = useState(null);
    const [editName, setEditName] = useState('');
    const [editMobile, setEditMobile] = useState('');

    const handleEdit = (item) => {
        setEditId(item._id);
        setEditName(item.name);
        setEditMobile(item.mobile);
    };

    const handleUpdate = () => {
        updateData(editId, editName, editMobile);
        setEditId(null); // Hide the edit form after updating
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((item) => (
                        <tr key={item._id}>
                            <td>
                                {editId === item._id ? (
                                    <input
                                        type="text"
                                        value={editName}
                                        onChange={(e) => setEditName(e.target.value)}
                                    />
                                ) : (
                                    item.name
                                )}
                            </td>
                            <td>
                                {editId === item._id ? (
                                    <input
                                        type="tel"
                                        value={editMobile}
                                        onChange={(e) => setEditMobile(e.target.value)}
                                    />
                                ) : (
                                    item.mobile
                                )}
                            </td>
                            <td>
                                {editId === item._id ? (
                                    <button onClick={handleUpdate}>Save</button>
                                ) : (
                                    <button onClick={() => handleEdit(item)}>Edit</button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Card;
