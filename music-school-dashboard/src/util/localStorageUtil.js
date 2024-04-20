export const upsertInLocalStorage = (key, value) => {
    const existingData = localStorage.getItem(key);
    const data = existingData ? JSON.parse(existingData) : [];
    const updatedData = data.map((item) => {
        const valueItem = value.find(v => v.id === item.id);
        return valueItem ? { ...item, ...valueItem } : item;
    });
    const newRecords = value.some(val => data.some(d => d.id === val.id))
        ? updatedData
        : [...updatedData, ...value.filter(val => !data.some(d => d.id === val.id))];

    localStorage.setItem(key, JSON.stringify(newRecords));
};

export const getFromLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
};

export const isSignedInToLocalStorage = () => {
    return !!localStorage.getItem("user");
};

export const signInThroughLocalStorage = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
};

export const signOutFromLocalStorage = () => {
    localStorage.removeItem("user");
};
