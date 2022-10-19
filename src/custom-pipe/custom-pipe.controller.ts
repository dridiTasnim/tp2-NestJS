import { Body, Controller, Post } from '@nestjs/common';
import { MajusEtFusionPipe } from './majus-et-fusion.pipe';

@Controller('custom-pipe')
export class CustomPipeController {
    
    @Post()
    customPipePost(@Body(MajusEtFusionPipe) body) : string{
        return body;
    }
}
