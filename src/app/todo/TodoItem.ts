
  export class TodoItem {
    task;
    done;
    constructor(task:String, done:Boolean) {
      this.task = task;
      this.done = done;
      
    }

    ChangeDone(){
    this.done = !this.done;
    }
    ChangeDoneAll(checkedAll:Boolean){
        this.done = !checkedAll;
        }
  }
  