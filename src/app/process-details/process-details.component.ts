
import { Component, OnInit } from '@angular/core';
import { ProcessService } from '../services/processes/processes.service';
import { Process } from '../services/processes/processes';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-process-details',
  templateUrl: './process-details.component.html',
  styleUrls: ['./process-details.component.scss']
})
export class ProcessDetailsComponent implements OnInit {

  id: number
  process: Process
  constructor( private route: ActivatedRoute, private processService: ProcessService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    //this.process = new Process();
    this.processService.getProcess(this.id).subscribe( data => {
      this.process = data;
    });
  }

}








/* import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
 */
/* import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-process-details',
  templateUrl: './process-details.component.html',
  styleUrls: ['./process-details.component.scss']
})
export class ProcessDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
 */