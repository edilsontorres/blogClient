import { useState } from 'react';
import * as U from './UploadImgStyle';
import { useDropzone } from 'react-dropzone';
import { FaCloudUploadAlt, FaTimes } from 'react-icons/fa';

export const UploadImg = (props: { img: (img: File) => void }) => {

    const [file, setFile] = useState<File | null>();

    const onDrop = (img: File[]) => {
        setFile(Object.assign(img[0], {
            text: URL.createObjectURL(img[0])
        }));
    };

    const removeFile = () => {
        setFile(null);
    };

    const formatDataFile = () => {
        const formData = new FormData();
        if (file && file.size > 0) {
            formData.append("img", file.name);
            formData.append("img", file);
            const imgUpload = file;
            props.img(imgUpload)
        }
    }
    formatDataFile();


    const dropzone = useDropzone({
        onDrop,
        accept: {
            'image/jpg': ['.jpg'],
            'image/png': ['.png'],
            'image/jpeg': ['.jpeg']
        }
    });

    if (file) return <HasFile file={file} remove={removeFile} />;

    return (

        <U.Container {...dropzone.getRootProps()} className={` ${dropzone.isDragActive ? 'boderActive' : null}`}>
            <label htmlFor='img'>
                <div className='alignItens'>
                    <FaCloudUploadAlt className={`${dropzone.isDragActive ? 'svgActive' : null}`} />
                    {dropzone.isDragActive ?
                        (
                            <p className='dropSend'>Solte para enviar</p>
                        )
                        :
                        (
                            <>
                                <p>
                                    <span>Image</span>
                                </p>
                            </>
                        )
                    }
                </div>
            </label>
            <input {...dropzone.getInputProps()} hidden />
        </U.Container>
    );
}

export const HasFile = (props: { file: File, remove: () => void }) => {

    const imgFile = props.file.text;
    return (
        <U.Container>
            <U.thumb>
                <img src={`${imgFile}`} />
                <button onClick={props.remove}>
                    <FaTimes />
                </button>
            </U.thumb>
        </U.Container>
    );
}