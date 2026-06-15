const getStoredData = () => {
    const storedData = localStorage.getItem("installed")

    if (storedData) {
        const storedDataSTR = JSON.parse(storedData)
        return (storedDataSTR)
    } else {
        return [];
    }
}

const addToDB = (id) => {
    const storedAppsData = getStoredData()

    if (storedAppsData.includes(id)) {
        alert("App already Installed!")
    } else {
        storedAppsData.push(id)
        const appData = JSON.stringify(storedAppsData)
        localStorage.setItem("installed", appData)
    }
}

const removeFromDB = (id) => {
    const storedApps = getStoredData()

    const remainingApps = storedApps.filter(appId => parseInt(appId) !== parseInt(id))
    localStorage.setItem("installed", JSON.stringify(remainingApps))
}

export { getStoredData, addToDB, removeFromDB }