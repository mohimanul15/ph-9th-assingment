function SetLocalStorageWord(data = null) {
    let StorageData = [];
    if (!localStorage.getItem('Word')) {
        StorageData.push(data);
        localStorage.setItem('Word', JSON.stringify(StorageData));

    } else {
        StorageData = JSON.parse(localStorage.getItem('Word'));
        if (!StorageData.includes(data)) {
            StorageData.push(data);
            localStorage.setItem('Word', JSON.stringify(StorageData));
        }
    }
}

function GetLocalStorageWord() {
    let StorageData = [];
    const defWord = localStorage.getItem('Word');

    if (defWord !== null && defWord.length > 0) {
        StorageData = JSON.parse(defWord);
        return StorageData;
    } else {
        return [];
    }
}


function UpdateWord(p_id) {
    const wordPrev = GetLocalStorageWord();

    if (wordPrev.length > 1) {
        const newWord = wordPrev.filter(ele => ele !== p_id);
        localStorage.setItem('Word', JSON.stringify(newWord));
    } else {
        localStorage.removeItem('Word');
    }
}


function EmptyWord() {
    localStorage.removeItem('Word');
}

export {
    SetLocalStorageWord,
    GetLocalStorageWord,
    UpdateWord,
    EmptyWord
}