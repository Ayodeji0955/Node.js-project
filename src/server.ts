import express, { Response, Request, NextFunction } from 'express'
import { config } from 'dotenv'
import colors from 'colors'
import { idText } from 'typescript';

// load the env vars
config();

const app = express()

// function expression or declaration
function testNumber(num: number) {
    if (num > 0) {
        console.log(num + ' is positive');
    }
}



// STUDENT'S OBJECT
    const students: any = {

        details:[
            {
                id: 1,
                name: 'John',
                age: 20
            },
            {
                id: 2,
                name: 'Matter',
                age: 22
            }
        ],
        scores:[
            {
                id: 1,
                studentId: 1,
                score: 70,
                grade: 'A'
            },
            {
                id: 2,
                studentId: 2,
                score: 35,
                grade: 'D'
            }


        ],
    }

// ARROW FUNCTION
const getStudents = (data: Array<any>) => {
    data.forEach((stud) => {
        console.log(`Name: ${stud.name} Age: ${stud.age}`);
    })
}

// ANOTHER WAY TO WRITE ARROW FUNCTION
const getScores = (data: Array<any>): Array<number> => {
    let result: Array<number> = [];
    data.forEach((score) => {
        result.push(score.score)
    })

    return result
}


const testFuncs = (data: Array<any>): void => {
    // MAP
    const test = data.map((stud) => stud.name === 'John');
    console.log(test);
    // FILTER
    const test2 = data.filter((stud) => stud.age > 10 );
    console.log(test2[0]);
}

    
// ES5 FUNCTION SYNTHAX
  function doSomething() {
// DEFAULT VALUE
    const age: number = parseInt((process.env.VAR_AGE || 40).toString());
// TEMPLATE LITERALS
    const printv = `my age is ${ age + 2} and I am still younger than my father who is ${ age - 2}`
    console.log(printv)

// DESTRUCTURING     
    const { details, scores } = students;
    // console.log(scores);
    // console.log(details);


// Function call
    // getStudents(details)

    // const score:number = 90;
    
    // call
    // testNumber(score);
// Another Function Call
    // const scores = getScores(scores);
    // const studScore = getScore(score)
    
    // studentScores.forEach((s)) => {
        // console.log(`Score: ${s}`);
    //}

    testFuncs(details);



// SWITCH STATEMENT    
    // switch (score) {
    //     case 70:
    //         console.log('The score is ' + score);
    //     break;

    //     case 80:
    //         console.log('The score is ' + score);
    //     break;

    //     case 90:
    //         console.log('The score is ' + score);
    //     break;

    //     default:
    //         console.log('The score is ' + score);
    //     break;
    // }
}

//function call
doSomething();


// ARROW FUNCTION SYNTHAX
// const function_name = () => {
    // logic
// }

app.get('/', (req: Request, res: Response, next: NextFunction) => {




    res.status(200).json({
        error: false,
        errors: [],
        message: 'success',
        data: {
            name: 'First-node-server',
            version: '1.0.0'
        },
        status: 200

    })
})

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, ()=> {
    console.log(colors.bold.green(`Node server running at ${process.env.NODE_ENV} mode on port ${PORT}`))
})

// handle unhandledRejection errors

process.on('unhandledRejection', (err: any, promise) => {
    console.log(colors.bold.red(`Error: ${err.message}`))
    server.close(() => process.exit)
})