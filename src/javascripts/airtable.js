import Airtable from "airtable";

const token = 'patbHUK8wXXwfzf3J.cebb5c2feb0f0b1882bcd5ba922a0f723b5c2f920674872fa1379fa955cd7861';

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: token
});

let base = Airtable.base('appzXjfovKKA9DEfm');

function getFormatDate (date = '0000-00-00') {

    const [year, month, day] = date.split('-');

    return `${day}/${month}/${year}`
}

export const getData = async (tableName, sort = null) => {
  try {
    const selectOptions = {};

    if (sort) {
      selectOptions.sort = sort;
    } else if (tableName === 'Articles') {
      selectOptions.sort = [{ field: 'Date', direction: 'asc' }];
    }

    const records = await base(tableName).select(selectOptions).all();
    
    return records.map(record => ({
      id: record.id,
      ...record.fields
    }));
  } catch (error) {
    console.error(`Ошибка при получении листа "${tableName}":`, error);
    return [];
  }
};
