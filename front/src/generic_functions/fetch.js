export default async function fetchData(urlSuffix, method, body) {
    const url="https://mediasell.herokuapp.com/api" + urlSuffix;
    console.log("Fetching from this url: " + url);
    try {
        const response = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(body)
        });
        const results = await response.json();
        console.log(results);
        return results;
    } catch (error) {
        console.log(error);
    }
}