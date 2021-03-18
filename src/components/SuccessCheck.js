import React from 'react';
import {useSelector} from "react-redux";

function SuccessCheck({ success, setSuccess }) {

    const loaded = useSelector(state => state.api.saveGroup.success);
    setSuccess(loaded);

    return (
        <div></div>
    );
}

export default SuccessCheck;
