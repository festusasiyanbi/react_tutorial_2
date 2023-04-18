const ApiRequest = async (url = '', optionsObj = null, errMsg = null) => {
    try {
        const response = await fetch(url, optionsObj);
        if (!response.ok) throw Error ("Please reload the app");
        const listItems = response.json();
    } catch(err) {
        errMsg = err.message;
    } finally {
        return errMsg;
    }
}
export default ApiRequest;
