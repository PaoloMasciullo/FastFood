export function handleOnChange(e, field, setData, callback = (value) => value) {
    setData((data) => ({...data, [field]: callback(e.target.value)}));
}
