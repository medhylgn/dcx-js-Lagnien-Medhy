const words = ["chat", "éléphant", "panda", "hippopotame"];
const longest = words.reduce((a, b) => a.length > b.length ? a : b);
alert(`Le mot le plus long est : ${longest}`);