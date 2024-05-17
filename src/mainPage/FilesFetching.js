function fetchPricesSelect(obj) 
{
    const res = []

    for (const key in obj) 
    {
        if (typeof obj[key] === 'object') 
        {
            const types = [];
            for (const subKey in obj[key]) 
            {
                if (typeof obj[key][subKey] === 'object' && typeof obj[key][subKey] !== Number) 
                {
                    const types2 = [];
                    for(const subKey2 in obj[key][subKey])    
                        types2.push({ label: subKey2, val: obj[key][subKey][subKey2] });

                    types.push({ label: subKey, types2: types2 });
                } 
                else 
                {
                    types.push({ label: subKey, val: obj[key][subKey] });
                }
            }

            res.push({ label: key, types: types });
        } 
        else 
            res.push({ label: key, val: obj[key] });
    }

    return res;
}

export default fetchPricesSelect;