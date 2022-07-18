import { useState, useEffect } from 'react';

const Info = () => {

    const [name, setName] = useState('');
    const [nickName, setNickName] = useState('');

    // const [form, setForm] = useState({
    //     name: '',
    //     nickName: '',
    // })
    const onChangeName = e => {
        setName(e.target.value);
    }
    const onChangeNickName = e => {
        setNickName(e.target.value);
    }
    useEffect(() => {
        console.log('마운트될 때만 실행됩니다.')
    }, []);

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickName} onChange={onChangeNickName} />
            </div>
            <div>
                <div><b>이름:</b> {name}</div>
                <div><b>닉네임:</b> {nickName}</div>
            </div>
        </div>
    );
};

export default Info;