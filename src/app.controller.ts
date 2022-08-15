import {Controller,Get} from '@nestjs/common'

@Controller('/app')
export class AppController {
    @Get('/welcome')
    getRootRoute(){
        return 'Hi Hello'
    }

    @Get('/exit')
    getByeRoute(){
        return 'Bye Hello'
    }
}