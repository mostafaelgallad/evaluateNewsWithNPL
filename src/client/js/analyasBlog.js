
  async function AnalyasBlog(event) {
    document.querySelector('.url_error').style.display="none";
    debugger
    console.log("analays blog")
        event.preventDefault()
        let inputValue = document.getElementById('input_url').value
    if(Client.validateUserInput(inputValue)){
        const url = 'http://localhost:8081/analysBlog';
        let bodyData = {
            url: inputValue
        }
            let result = await SendPostReq(url, bodyData)
            document.getElementById('agreement').innerHTML = `<strong>Agreement: </strong>${result.agreement}`;
            document.getElementById('subjectivity').innerHTML = `<strong>Subjectivity: </strong>${result.subjectivity}`;
            document.getElementById('confidence').innerHTML = `<strong>Confidence: </strong>${result.confidence}`;
            document.getElementById('irony').innerHTML = `<strong>Irony: </strong>${result.irony}`;
            document.getElementById('score_tag').innerHTML = `<strong>Score Tag: </strong>${result.score_tag}`;
        }
        else{
       document.querySelector('.url_error').style.display="block";
        }
    }

const SendPostReq = async (url, bodyData) => {
    const meaningCloud_res = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyData)
    });
    try {
       return await meaningCloud_res.json();
    } catch (error) {
        console.log('error', error);
    }
}

export { AnalyasBlog }