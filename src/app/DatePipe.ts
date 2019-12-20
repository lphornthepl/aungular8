import { Pipe, PipeTransform } from '@angular/core';
import {CommonModule} from "@angular/common";
import * as moment from 'moment';

@Pipe({ name: 'fromNow' })
export class DatePipe implements PipeTransform {

  transform(date: Date): string {
    return moment(date).fromNow();
  }

}
