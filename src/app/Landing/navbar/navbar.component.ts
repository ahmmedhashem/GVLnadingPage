import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    $("nav .navbar-toggler").click(function(){
    
     if($("nav .collapse").hasClass("show")){
      $("nav .collapse").css("display","none");
      $("nav .collapse").removeClass("show");
     
     }else{
      $("nav .collapse").css("display","inline-block");
      $("nav .collapse").addClass("show");
     }
     
    }

    )
  }

}
