// "this" here is "exports"

this.id = 'exports';

const testerObj = {
  func1: function () {
    // caller is testerObject,hence this refers inside tessterObj
    console.log('func1', this);
  },

  func2: () => {
    // irrelevent to caller and this refers to where func2 is defined(ie scope of where testerObj is defined) 
    console.log('func2', this);
  },
};

testerObj.func1();
testerObj.func2();
