import React, { useState, useEffect } from 'react';


function FilesList() {
    const [fileArray, setFileArray] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/users/admin`)
            .then(res => res.json())
            .then(data => setFileArray(data));
    },[])

    return (
        <></>
    );
}

export default FilesList;