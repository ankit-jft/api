function employee() {
    this.empData = [];
    //add details 
    this.post = (obj, display) => {
        setTimeout(() => {
            this.empData.push(obj);
            display();
        }, 2000);
    }
    //display
    this.get = () => {
        return this.empData;
    }
    //delete
    this.delete = (obj, display) => {
        setTimeout(() => {
            this.empData.splice(this.empData.findIndex((a) => a.id === obj), 1);
            display();

        }, 2000);
    }
    //upadte
    this.put = (obj, display) => {
        setTimeout(() => {
            for (let i = 0; i < this.empData.length; i++) {
                if (this.empData[i].id == obj.id) {
                    this.empData[i] = obj;
                    break;
                }
            }
            display();
        }, 2000);

    }
}