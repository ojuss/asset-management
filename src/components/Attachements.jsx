import React from "react";
import {Button, Typography} from "@material-ui/core";
import {useState} from "react";

const Attachements = () => { 
    const [fileName, setFileName] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
        setFileName(file.name);
        }
    };
    return (
        <div>
            <div>
                <input 
                type="file" 
                hidden 
                id="fileInput" 
                onChange={handleFileChange} 
                />
                <label htmlFor="fileInput">
                <Button variant="contained" component="span" color="primary">
                    Select File
                </Button>
                </label>
                {fileName && <Typography variant="body1">Selected file: {fileName}</Typography>}
            </div>
        </div>
    );
};

export default Attachements;