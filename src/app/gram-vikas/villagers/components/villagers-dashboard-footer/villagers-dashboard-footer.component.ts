import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-villagers-dashboard-footer',
  templateUrl: './villagers-dashboard-footer.component.html',
  styleUrls: ['./villagers-dashboard-footer.component.css']
})
export class VillagersDashboardFooterComponent {



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
