import { observable, makeObservable, action } from 'mobx';

class GlobalStore {
    isLogin = false;
    constructor() {
        makeObservable(this, {
            isLogin: observable,
            setIsLogin: action,
        })
    }

    setIsLogin = (val) => {
        this.isLogin = val;
        console.log("---------------set-----------------");
    }

}

export default new GlobalStore();