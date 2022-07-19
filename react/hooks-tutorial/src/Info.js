// import { useState, useEffect, useReducer } from 'react';
// import UseInputs from './UseInputs';

// function reducer(state, action) {
//     return {
//         ...state,
//         [action.name]: action.value
//     };
// }



// const Info = () => {

//     const [state, dispatch] = useReducer(reducer, {
//         name: '',
//         nickName: ''
//     });
//     const { name, nickName } = state;
//     const onChange = e => {
//         dispatch(e.target);
//     };
//     return (
//         <div>
//             <div>
//                 <input name="name" value={name} onChange={onChange} />
//                 <input name="nickName" value={nickName} onChange={onChange} />
//             </div>
//             <div>
//                 <div><b>이름:</b> {name}</div>
//                 <div><b>닉네임:</b> {nickName}</div>
//             </div>
//         </div>
//     );
// };



// // const Info = () => {

// //     const [name, setName] = useState('');
// //     const [nickName, setNickName] = useState('');

// //     // const [form, setForm] = useState({
// //     //     name: '',
// //     //     nickName: '',
// //     // })


// //     // useEffect(() => {
// //     //     console.log(name)
// //     // }, [name]);
// //     useEffect(() => {
// //         console.log('effect')
// //         return () => {
// //             console.log('unmount')
// //         }
// //     }, []);

// //     const onChangeName = e => {
// //         setName(e.target.value);
// //     }
// //     const onChangeNickName = e => {
// //         setNickName(e.target.value);
// //     }


// //     return (
// //         <div>
// //             <div>
// //                 <input value={name} onChange={onChangeName} />
// //                 <input value={nickName} onChange={onChangeNickName} />
// //             </div>
// //             <div>
// //                 <div><b>이름:</b> {name}</div>
// //                 <div><b>닉네임:</b> {nickName}</div>
// //             </div>
// //         </div>
// //     );
// // };

// export default Info;

import { useState, useEffect, useReducer } from 'react';
import useInputs from './useInputs';


const Info = () => {

    const [state, onChange] = useInputs({
        name: '',
        nickName: ''
    });
    const { name, nickName } = state;


    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name="nickName" value={nickName} onChange={onChange} />
            </div>
            <div>
                <div><b>이름:</b> {name}</div>
                <div><b>닉네임:</b> {nickName}</div>
            </div>
        </div>
    );
};



// const Info = () => {

//     const [name, setName] = useState('');
//     const [nickName, setNickName] = useState('');

//     // const [form, setForm] = useState({
//     //     name: '',
//     //     nickName: '',
//     // })


//     // useEffect(() => {
//     //     console.log(name)
//     // }, [name]);
//     useEffect(() => {
//         console.log('effect')
//         return () => {
//             console.log('unmount')
//         }
//     }, []);

//     const onChangeName = e => {
//         setName(e.target.value);
//     }
//     const onChangeNickName = e => {
//         setNickName(e.target.value);
//     }


//     return (
//         <div>
//             <div>
//                 <input value={name} onChange={onChangeName} />
//                 <input value={nickName} onChange={onChangeNickName} />
//             </div>
//             <div>
//                 <div><b>이름:</b> {name}</div>
//                 <div><b>닉네임:</b> {nickName}</div>
//             </div>
//         </div>
//     );
// };

export default Info;