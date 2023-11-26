import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data_villages: any;
  data_families: any;
  constructor(private _ser: HomeService) { }

  // Retrieve data from the server to get the count of villages
  get_villages() {
    // Subscribe to the observable returned by the get_villages_count() method
    this._ser.get_villages_count().subscribe((res) => {
      // Store the response data in the data_villages variable
      this.data_villages = res;
      // Log the value of data_villages to the console
      console.log('Villages ======>>', this.data_villages);
    });
  }
  // Fetch the count of families using the API call
  get_families() {
    // Subscribe to the get_families_count Observable
    this._ser.get_families_count().subscribe((res) => {
      // Store the response in the data_families variable
      this.data_families = res;
      // Print the value of data_families to the console
      console.log('Families ======>>', this.data_families);
    });
  }

  /**
   * Initializes the component and calls the 'get_villages' and 'get_families' functions.
   *
   * @return {void} This function does not return anything.
   */
  ngOnInit(): void {
    this.get_villages();
    this.get_families();
  }
  // Buttons For Villages AND Families
  Villages: boolean = false;
  Families: boolean = false;
  // Toggle the display of villages
  toggleVillages() {
    // Toggle the value of the Villages property
    this.Villages = !this.Villages;
    // Set the value of the Families property to false
    this.Families = false;
    // Clear the activeButton property
    this.activeButton;
  }
  // Families
  toggleFamilies() {
    // Toggle the value of the Families property
    this.Families = !this.Families;
    // Set the value of the Villages property to false
    this.Villages = false;
    // Clear the activeButton property
    this.activeButton;
  }
  // Active Buttons
  activeButton: number = 1;

  // Set the activeButton property to the provided buttonNumber value
  setActiveButton(buttonNumber: number) {
    this.activeButton = buttonNumber;
  }
  // Random color
  //  1
  // getRandomColor() {
  //   // Generate a random background color.
  //   const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  //   console.log(`Random Color : ${randomColor}`); // Log the random color to the console
  //   return randomColor;
  // }

  // 2
  getRandomColor(): string {
    const predefinedColors: string[] = [
      '#FF0000', // Red
      '#00FF00', // Lime
      '#0000FF', // Blue
      '#FFA500', // Orange
      '#800080', // Purple
      '#008080', // Teal
      '#FF00FF', // Fuchsia
      '#008000', // Green
      '#00FFFF', // Aqua
      '#FF4500', // OrangeRed
      '#8A2BE2', // BlueViolet
      '#FFD700', // Gold
      '#32CD32', // LimeGreen
      '#8B008B', // DarkMagenta
      '#2F4F4F', // DarkSlateGray
      '#00CED1', // DarkTurquoise
      '#FF6347', // Tomato
      '#8B4513', // SaddleBrown
      '#FF69B4', // HotPink
    ];
    // Shuffle the predefined colors array
    const shuffledColors = this.shuffleArray(predefinedColors);

    // Pick a color from the shuffled array
    const randomColor = shuffledColors[0];

    console.log('Random Color:', randomColor);
    return randomColor;
  }
  shuffleArray(array: any[]): any[] {
    // Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
