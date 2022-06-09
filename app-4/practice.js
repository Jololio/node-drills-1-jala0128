const fs = require("fs")
const path = require("path")

fs.appendFile(path.join(__dirname, "/text.txt"), "Hello World", (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Succesful appendage!")
    }
})

fs.readFile(__dirname + "/text.txt", "utf8", (err, data) => {
    if (err){
        console.log(err)
    } else {
        console.log(data, "Successfully read!")
    }
})

fs.writeFile(__dirname + "/text.txt", "Hello World", (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Successfully rewritten!")
    }
})

fs.rename(__dirname + "/text.txt", __dirname + "/somethingElse.txt", (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Succesfully renamed!")
    }
})

fs.unlink(__dirname + "/somethingElse.txt", (err) => {
    if (err){
        console.log(err)
    } else {
        console.log("Succesfully unlinked!")
    }
})