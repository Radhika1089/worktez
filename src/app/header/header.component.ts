import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ThemeService } from '../services/general/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router, public authService: AuthService, public themeService: ThemeService) { }

  ngOnInit(): void {
  }

  startNewSprint() {
    this.router.navigate(['/StartNewSprint']);
  }

  startNewSession() {
    this.router.navigate(['/CreateNewSession']);
  }

  Board(){
    this.router.navigate(['/Board']);
  }

  myDashBoard(){
    this.router.navigate(["/"])
  }

  createTeam(){
    this.router.navigate(['/CreateTeam']);
  }

  updateTeam(){
    this.router.navigate(['/UpdateTeam', this.authService.getTeamId()]);
  }
}
