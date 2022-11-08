var _Student_gpa;
export class Student {
    constructor(id, name, gpa) {
        _Student_gpa.set(this, void 0);
        this.id = id;
        this.name = name;
        this.gpa = gpa;
    }
    set gpa(gpa) { this.gpa = gpa; }
    get gpa() { return this.gpa; }
    getName() { return this.name; }
}
_Student_gpa = new WeakMap();
