var date=new Date();
console.log(date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());

const school={
    name:"Michael",
    info(){
        console.log(this);
    }
}

// school.info();

school.test=()=>
{
    console.log(this);
};
school.test();
function add()
{
    console.log("Apple");
}
let addi=number=>console.log(number);
addi(89);