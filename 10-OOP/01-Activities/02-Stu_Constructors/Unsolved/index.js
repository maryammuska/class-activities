// TODO: Create a constructor function called 'Developer' that takes in 'name' and 'tech'
function Developer(name, tech) {
    this.name = name;
    this.tech = tech;
    this.introduction = () => {
            console.log(`Hi, my name is ${this.name} and I love ${this.tech}!`);
        }
    };
// TODO: Include a method called 'introduction()' that introduces the Developer with their name and favorite tech

const name = new Developer('name', 'tech');


// TODO: Create a new object using the 'Developer' constructor
name.introduction();

// TODO: Call the 'introduction()' method on the new object
