import Airtable from "airtable";

const token = 'patbHUK8wXXwfzf3J.cebb5c2feb0f0b1882bcd5ba922a0f723b5c2f920674872fa1379fa955cd7861';

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: token
});

let base = Airtable.base('patbHUK8wXXwfzf3J');

function getFormatDate (date = '0000-00-00') {

    const [year, month, day] = date.split('-');

    return `${day}/${month}/${year}`
}

function getData(list) {
    return new Promise((resolve, reject) => {
        const content = [];
        base(list)
            .select({maxRecords: 100})
            .firstPage().then((records) => {
                records.forEach((item) => {
                    content.push({
                        id: item.id,
                        title: item.fields['Name'],
                        tags: item.fields['Tags'],
                        type: item.fields['Type content'],
                        image: item.fields['Image'],
                        date: item.fields['Date'],
                        daterus: getFormatDate(item.fields['Date']),
                        link: item.fields['Link'],
                        description: item.fields['Description']
                    })
                })

                resolve(content);
            })
    })
}

export {getData}