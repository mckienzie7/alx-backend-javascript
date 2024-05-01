interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface{
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface{

    workFromHome(): string {
        return 'Working from home';
    }
    getCoffeeBreak(): string{
        return 'Getting a cofee break';
    }
    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
} 
class Teacher implements TeacherInterface{
    workFromHome(): string {
        return 'Cannot work from home';
      }
    
      getCoffeeBreak(): string {
        return 'Cannot have a break';
      }
    
      workTeacherTasks(): string {
        return 'Getting to work';
      }

}
function createEmployee(salary: number | string ){
    if(typeof salary === "number"){
    if(salary < 500){
        return new Teacher();
    }
    else{
        return new Director;
    }

}
}
function isDirector(employee: Teacher | Director): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
  }
function executeWork(employee: Teacher | Director){
    if (isDirector(employee)){
        return employee.workDirectorTasks;
    }
    else{
        return employee .workTeacherTasks
    }
}
type Subject =  'Maths' | 'History';
function teachClass(todayClass: Subject): string{
    if (todayClass == 'History'){
        return `Teaching ${todayClass}`;
    }
    return `Teaching`
}
