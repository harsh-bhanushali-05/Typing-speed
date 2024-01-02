// This function is calling an API to fetch random words and send it the component calling it 
async function getdat(x) {
    let data = await fetch("https://random-word-api.vercel.app/api?words=" + x).then((data) => { return data.json() });
    return data;
}
export default getdat;