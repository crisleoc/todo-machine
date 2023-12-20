import React from 'react';

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem);
                    // console.log(parsedItem);
                }
                setLoading(false);
                // throw new Error("Alerta de error!!");
            } catch (error) {
                setLoading(false);
                setError(error.message);
            }
        }, 2000);
        // eslint-disable-next-line
    }, [])

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    }

    return {
        item,
        saveItem,
        loading,
        error
    }
}

export { useLocalStorage };


// localStorage.removeItem('TODOS_V1');
// const defaultTodos = [
//   { key: 1, text: 'Cortar cebolla.', completed: true },
//   { key: 2, text: 'Aprobar cálculo diferencial.', completed: true },
//   { key: 3, text: 'Aprobar cálculo integral.', completed: false },
//   { key: 4, text: 'Tomar el curso de intro. a React.', completed: false },
//   { key: 5, text: 'Aprobar intro. a teoría de conjuntos.', completed: false },
//   { key: 6, text: 'Hacer integrales.', completed: false },
//   { key: 7, text: 'Hacer una llamadita con Niki.', completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));