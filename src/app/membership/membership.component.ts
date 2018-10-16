import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss']
})
export class MembershipComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $(function() {
      function checkWidth() {
        if ($(window).width() > 768) {
          $('.js-button-toggle').removeClass('collasped');
          $('.js-accordion-toggle').addClass('show');
        } else if ($(window).width() < 768) {
          $('.js-button-toggle').addClass('collasped');
          $('.js-accordion-toggle').removeClass('show');
        }
      }
      checkWidth();

      $(window).resize(checkWidth);
    });
  }
}
