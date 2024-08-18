import { useCallback, useState } from 'react';
import * as U from './UploadImgStyle';
import { useDropzone } from 'react-dropzone';
import { FaCloudUploadAlt, FaTimes } from 'react-icons/fa';

export const UploadImg = () => {

    const [file, setFile] = useState<File | null>(null);

    const onDrop = useCallback((img: File[]) => {
        setFile(Object.assign(img[0], {
            text: URL.createObjectURL(img[0])
        }));
    }, [])

    const removeFile = useCallback(() => {
        setFile(null);
    }, [file])

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

            <label htmlFor='dropzone-file'>
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
        <form>
            <U.Container>
                <U.thumb>
                    <img src={`${imgFile}`} />
                    <button onClick={props.remove}>
                        <FaTimes />
                    </button>
                </U.thumb>
            </U.Container>
        </form>
    );
}