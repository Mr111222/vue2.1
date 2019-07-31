function getList(x){
    return x+1
}
class Fns {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    p () {
        return 2
    }
    get(x){
        return x
    }
    set(x){
        return x+1
    }
    toString () {
        return `($(this.x)$(this.y))`
    }
}



export default Fns