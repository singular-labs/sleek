import React, { useState } from "react";

import css from './ScriptParam.pcss';

function transformParameterName(parameterName) {
    if (parameterName) {
        parameterName = parameterName.replace('_', ' ')
    }
    return parameterName
}

function isValidParamValue(value, type) {
    if (!value) {
        return true
    }

    switch (type) {
        case 'string':
            return true
        case 'integer':
            return Number.isInteger(+value)
        default:
            throw SyntaxError(`Unknown type ${type}`)
    }
}

function ParamValidationMessage(props) {
    let {
        isValidParam,
        type
    } = props

    return (
        !isValidParam &&
        <div className={css.invalidParamMessage}>
            Parameter should be {type}!
        </div>
    )
}

function ScriptParam(props) {
    const {
        name,
        type,
        value,
        scriptParamsValues,
        setScriptParamsValues
    } = props;

    let [isValidParam, setIsValidParam] = useState(true);

    return (
        <div
            className={css.textField}
        >
            <div
                className={css.label}
            >
                {transformParameterName(name)}
            </div>
            <input
                type={type}
                value={value || ""}
                className={css.input}
                onChange={event => {
                    let params = Object.assign({}, scriptParamsValues);
                    params[name] = event.target.value;
                    setScriptParamsValues(params);
                    setIsValidParam(isValidParamValue(event.target.value, type));
                }}
            >
            </input>
            <ParamValidationMessage
                isValidParam={isValidParam}
                type={type}
            />
        </div>
    );
}

export default ScriptParam;
