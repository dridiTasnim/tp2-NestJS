import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class MajusEtFusionPipe implements PipeTransform {
  transform(value: {skills : string[]}, metadata: ArgumentMetadata) {
    if (!value) throw new BadRequestException() ;
    if(metadata.type=='body'){
      return value.skills.map((element)=> element.toUpperCase()).join('-');
    }
    return value.skills;
  }
}
