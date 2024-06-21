import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});

    const value = {
        auth,
        setAuth,
    }

    // useEffect(() => {
    //     console.log('auth', auth);
    // }, [auth])


    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            if (auth.role === undefined) {

                const dataDecode = jwtDecode(localStorage.getItem('token'));
                // console.log('dataDecode', dataDecode);

                setAuth({
                    id: dataDecode.CustomerID,
                    fullname: dataDecode.CusName,
                    phone: dataDecode.CusPhone,
                    address: dataDecode.CusAddress,
                    empId: dataDecode.EmployeeID,
                    empName: dataDecode.EmpName,
                    empPhone: dataDecode.EmpPhone,
                    empEmail: dataDecode.EmpGmail,
                    cusPoint: dataDecode.CusPoint,
                    role: localStorage.getItem('role'),
                    token: localStorage.getItem('token'),
                });
            }
        }
    }, [localStorage.getItem('token')])

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;