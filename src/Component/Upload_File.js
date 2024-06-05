import React, { useState } from 'react';
import { Button, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import Upload_File_Button from '../assets/Icons/Upload_File_Button.svg';
import { COLORS } from '../Constants/themes';

const Upload_File = () => {
    const [file, setFile] = useState(null);

    const UploadFile = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
            });
            console.log(res);
            setFile(res);
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log('User cancelled the picker');
            } else {
                throw err;
            }
        }
    };

    const handleFileUpload = async () => {
        if (!file) return;

        const formData = new FormData();
        formData.append('file', {
            uri: file.uri,
            name: file.name,
            type: file.type,
        });

        try {
            // const response = await fetch('https://your-api-endpoint.com/upload', {
            //     method: 'POST',
            //     body: formData,
            //     headers: {
            //         'Content-Type': 'multipart/form-data',
            //     },
            // });

            if (response.ok) {
                const responseData = await response.json();
                console.log('File uploaded successfully', responseData);
            } else {
                console.error('File upload failed', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error uploading file', error);
        }


    };

    return (
        <>
            <StatusBar animated barStyle={'dark-content'} backgroundColor={COLORS.Main_Color_White} />

            <TouchableOpacity onPress={UploadFile} style={{ marginVertical: 10, alignItems: "center" }}>
                <Upload_File_Button />
                {/* {file && <Text style={{ color: "#00d" }}>Selected File: {file.name}</Text>} */}
            </TouchableOpacity>
{/* 
            {file && (
                <Button title="Upload File" onPress={handleFileUpload} />
            )} */}
        </>
    );
};

export default Upload_File;
