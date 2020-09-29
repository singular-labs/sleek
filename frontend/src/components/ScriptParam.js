import React, { useState } from "react";

import css from './ScriptParam.pcss';

function transformParameterName(parameterName) {
    if (parameterName) {
        parameterName = parameterName.replace('_', ' ')
    }
    return parameterName
}

function isValidParamValue(value, type, options) {
    if (!value) {
        return true
    }

    switch (type) {
        case 'string':
            return [true, '']
        case 'integer':
            return [Number.isInteger(+value), 'Parameter should be integer']
        case 'float':
            return [Number.isFinite(+value), 'Parameter should be float']
        case 'boolean':
            return [['true', 'false'].includes(value), 'Parameter should be true or false']
        case 'choice':
            return [options['choices'].includes(value), `Parameter should be one of ${options['choices']}`]
        default:
            throw SyntaxError(`Unknown type ${type}`)
    }
}

function ParamValidationMessage(props) {
    let {
        isValidParam,
        invalidParamMessage
    } = props

    return (
        !isValidParam &&
        <div className={css.invalidParamMessage}>
            {invalidParamMessage}
        </div>
    )
}

function ScriptParam(props) {
    const {
        name,
        type,
        options,
        value,
        scriptParamsValues,
        setScriptParamsValues
    } = props;

    let [isValidParam, setIsValidParam] = useState(true);
    let [invalidParamMessage, setInvalidParamMessage] = useState('');

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

                    let [validationResult, invalidMessageResult] = isValidParamValue(event.target.value, type, options)
                    setIsValidParam(validationResult);
                    setInvalidParamMessage(invalidMessageResult);
                }}
            >
            </input>
            <ParamValidationMessage
                isValidParam={isValidParam}
                invalidParamMessage={invalidParamMessage}
            />
        </div>
    );
}

export default ScriptParam;
