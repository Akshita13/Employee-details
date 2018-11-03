
import{InMemoryDbService} from 'angular-in-memory-web-api';


export class InMemoryWebApiService implements InMemoryDbService{

  constructor() { }

  //create one database to get the data 
  createDb():object{
    const employeeData=[
        {id:1,name:"kajal",age:25,designation:"HR",date:'7/9/2010'},
        {id:2,name:"hemali",age:24,designation:"trainee",date:'9/5/2012'}
    ];

    return {employeeData};
    
}

}
