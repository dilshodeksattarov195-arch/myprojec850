const searchDeleteConfig = { serverId: 5446, active: true };

const searchDeleteHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_5446() {
    return searchDeleteConfig.active ? "OK" : "ERR";
}

console.log("Module searchDelete loaded successfully.");