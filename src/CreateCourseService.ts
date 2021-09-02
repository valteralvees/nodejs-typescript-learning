/**
 * Estrutura de dados do curso:
 *  name - string
 * duration - number
 * educator - string
*/

interface Course {
  name: string;
  duration:number;
  educator?: string;
  //opcional
}

class CreateCourseService{
  execute({duration,educator,name}: Course ){
    console.log(name,duration,educator)
  }
}

export default new CreateCourseService();