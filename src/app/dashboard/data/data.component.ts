import { Component } from '@angular/core';
import { courses } from '../../shared/data';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {

  public courses = courses;

  ngOnInit(): void {
    console.log(courses);
  }

}
