import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(processes: any[], searchTerm: string): any[] {
    if (!processes) return [];
    if (!searchTerm) return processes;

    searchTerm = searchTerm.toLowerCase();

    return processes.filter(process => {
      return process.processName.toLowerCase().includes(searchTerm) ||
             process.processDpt.toLowerCase().includes(searchTerm) ||
             process.processDptSection.toLowerCase().includes(searchTerm);
    });
  }
}
