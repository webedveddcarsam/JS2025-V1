//--------------------------------------//
// function constructor 

function laptopConstructor(Brand, Gen , CPU, Memory, HardDisk , camera, OS, wireless){
    this.compBrand=Brand;
    this.compGen=Gen;
    this.comCPU=CPU;
    this.compmemory=Memory;
    this.compharddisk=HardDisk;
    this.compcamera=camera;
    this.compos=OS;
    this.compwireless=wireless;
}

var laptop1=new laptopConstructor("HP",12,"i5",8,"128G","YES",11,"YES");
var laptop2=new laptopConstructor("HP",13,"i5",16,"256G","YES",11,"YES");
var laptop3=new laptopConstructor("HP",14,"i7",32,"512G","No",11,"YES");
var laptop4=new laptopConstructor("HP",15,"i7",64,"1T","No",11,"YES");
var laptop5=new laptopConstructor("HP",12,"i5",8,"128G","YES",11,"YES");
var laptop6=new laptopConstructor("HP",13,"i5",16,"256G","YES",11,"YES");
var laptop7=new laptopConstructor("HP",14,"i7",32,"512G","No",11,"YES");
var laptop8=new laptopConstructor("HP",15,"i7",64,"1T","No",11,"YES");

console.log(laptop1);




