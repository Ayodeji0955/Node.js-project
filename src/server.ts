import express, { Response, Request, NextFunction } from 'express'
import { config } from 'dotenv'
import colors from 'colors'

// load the env vars
config();

const app = express()

// function expression or declaration
function testNumber(num: number) {
    if (num > 0) {
        console.log(num + ' is positive');
    }
}


function doSomething() {
    const age: number = parseInt((process.env.VAR_AGE || 90).toString());
    console.log(age)
    // const score:number = 90;
    
    // call
    // testNumber(score);


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