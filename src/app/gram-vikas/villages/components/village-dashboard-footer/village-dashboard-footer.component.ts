import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-village-dashboard-footer',
  templateUrl: './village-dashboard-footer.component.html',
  styleUrls: ['./village-dashboard-footer.component.css']
})
export class VillageDashboardFooterComponent {



  lastScrollTop = 0;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > this.lastScrollTop) {
      // Scrolling down
      document.getElementById('site-footer')?.classList.add('hidden');
    } else {
      // Scrolling up
      document.getElementById('site-footer')?.classList.remove('hidden');
    }

    this.lastScrollTop = currentScroll;
  }

}
