import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notfind',
  templateUrl: './notfind.component.html',
  styleUrls: ['./notfind.component.scss']
})
export class NotfindComponent implements OnInit {

  constructor(private router: Router) { }
  countdown: number = 5;

  ngOnInit(): void {
    const interval = setInterval(() => {
      this.countdown--;
      if (this.countdown === 0) {
        clearInterval(interval);
        this.router.navigate(['/']);
      }
    }, 1000); // 1000 milliseconds = 1 second
  }

}
