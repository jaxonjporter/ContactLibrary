export async function getContactList(callback) {
    const response = await fetch('contacts');
    const data = await response.json();
    callback({contacts: data})
}