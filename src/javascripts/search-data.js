import Airtable from "airtable";

const token = 'patPnyhBFm76YUvgQ.4fa8871975fd6304e49d8f075bbd74b8ba33f761a5caf9adc7db84fe25b982f7';

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: token
})

let base = Airtable.base('appzXjfovKKA9DEfm');

function getPostTeasers() {
    return new Promise((resolve, reject) => {
        const content = [];
        base('article')
            .select({maxRecords: 100})
            .firstPage((err, result) => {
                result.forEach(record => {
                    // console.log(record.fields['Name'])
                    content.push({
                        id:record.id,
                        title: record.fields['Name'],
                        level: record.fields['Difficulty level']
                    })
                })
            })
        resolve(content)
    })
}

export { getPostTeasers }