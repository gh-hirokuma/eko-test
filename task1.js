const data = {
    users: [
        {
            id: 1,
            name: "hiro"
        },
        {
            id: 2,
            name: "john"
        }
    ],
    messages: [
        {
            id: 1,
            text: "hello",
            userId: 1,
            receiverId: 2
        },
        {
            id: 1,
            text: "good night",
            userId: 1,
            receiverId: 2
        },
        {
            id: 1,
            text: "goodbye",
            userId: 2,
            receiverId: 1
        }
    ]
}

function normalizeReceivedData (receivedData) {
    return receivedData.messages.map(message => {
        return {
            messageText: message.text,
            userFromName: receivedData.users.find(u => u.id === message.userId).name,
            userToName: receivedData.users.find(u => u.id === message.receiverId).name
        }
    })
}

console.log(normalizeReceivedData(data))