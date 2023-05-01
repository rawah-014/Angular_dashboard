import { Component, OnInit } from '@angular/core';
import { LoginComponent } from 'app/components/login/login.component';
import * as Chartist from 'chartist';
import { ChartService } from '../services/reports/charts.service';
import { Chart } from '../services/reports/charts';
import { CountService } from '../services/reports/count.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  chart: Chart[] = [];
  icApprove: Chart[] = [];
  gmApprove: Chart[] = [];

  review: Chart[] = [];
  update: Chart[] = [];
  updateApprove: Chart[] = [];
 
  number: number;
  updateCount: number;
  updateApprovedCount: number;
  icApprovedCount: number;
  stApprovedCount: number;
  gmApprovedCount: number;

  constructor(private chartService: ChartService, private countService: CountService) { }

  startAnimationForBarChart(chart) {
    let seq2: any, delays2: any, durations2: any;

    seq2 = 0;
    delays2 = 80;
    durations2 = 500;
    chart.on('draw', function (data) {
      if (data.type === 'bar') {
        seq2++;
        data.element.animate({
          opacity: {
            begin: seq2 * delays2,
            dur: durations2,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        });
      }
    });

    seq2 = 0;
  };
  ngOnInit() {
    //count all review
    this.countService.getCountReview()
      .subscribe(number => this.number = number);

    //count all update
    this.countService.getCountUpdate()
      .subscribe(updateCount => this.updateCount = updateCount);

     //count all update Approved
     this.countService.getCountUpdateApproved()
     .subscribe(updateApprovedCount => this.updateApprovedCount = updateApprovedCount); 
     
     //count all ic Approved
     this.countService.getCountIcApproved()
     .subscribe(icApprovedCount => this.icApprovedCount = icApprovedCount);  

     //count all ic Approved
     this.countService.getCountStApproved()
     .subscribe(stApprovedCount => this.stApprovedCount = stApprovedCount);  

     //count all ic Approved
     this.countService.getCountGmApproved()
     .subscribe(gmApprovedCount => this.gmApprovedCount = gmApprovedCount);  

    //Review ic approve
    this.chartService.getStApproved().subscribe((data: Chart[]) => {
      this.chart = data;

      const labels = this.chart.map(item => item.department);
      const series = this.chart.map(item => item.count);

      var datawebsiteViewsChart = {
        labels: labels,
        series: [series]
      };

      var websiteViewsChart = new Chartist.Bar('#websiteViewsChart', datawebsiteViewsChart);
      this.startAnimationForBarChart(websiteViewsChart);
    });

    //IcApproved
    this.chartService.getIcApproved().subscribe((data: Chart[]) => {
      this.icApprove = data;

      const labels = this.icApprove.map(item => item.department);
      const series = this.icApprove.map(item => item.count);

      var dataIcApprovedViewsChart = {
        labels: labels,
        series: [series]
      };

      var IcApprovedViewsChart = new Chartist.Bar('#IcApprovedViewsChart', dataIcApprovedViewsChart);
      this.startAnimationForBarChart(IcApprovedViewsChart);
    });

      //Gm Approved
      this.chartService.getGmApproved().subscribe((data: Chart[]) => {
        this.gmApprove = data;
  
        const labels = this.gmApprove.map(item => item.department);
        const series = this.gmApprove.map(item => item.count);
  
        var dataGmApprovedViewsChart = {
          labels: labels,
          series: [series]
        };
  
        var GmApprovedViewsChart = new Chartist.Bar('#GmApprovedViewsChart', dataGmApprovedViewsChart);
        this.startAnimationForBarChart(GmApprovedViewsChart);
      });

      //Review table
      this.chartService.getReview().subscribe((data: Chart[]) => {
        this.review = data;
      });

      // update table
      this.chartService.getUpdate().subscribe((data: Chart[]) => {
        this.update = data;
      });

      // update approve table
      this.chartService.getUpdateApproved().subscribe((data: Chart[]) => {
        this.updateApprove = data;
      });

  }
}


