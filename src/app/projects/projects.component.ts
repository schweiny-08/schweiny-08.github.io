import { Component, OnInit } from '@angular/core';
import { PROJECTS } from 'src/mock-projects';

import { Project } from 'src/project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  // projects: Project[] = [];
  projects = PROJECTS

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    // this.getProjects()
  }

  // getProjects(): void {
  //   this.projectService
  //     .getProjects()
  //     .subscribe((p) => (this.projects = this.projects));
  // }
}
