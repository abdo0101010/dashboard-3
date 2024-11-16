import { AfterViewInit, Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-hourlyseals',
  templateUrl: './hourlyseals.component.html',
  styleUrl: './hourlyseals.component.css'
})
export class HourlysealsComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.createRadarChart();
  }

  createRadarChart() {
    const canvas = document.getElementById('hourlySalesChart') as HTMLCanvasElement;
    const ctx = canvas?.getContext('2d');

    if (ctx) {
      new Chart(ctx, {
        type: 'radar',
        data: {
          labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
          datasets: [
            {
              label: 'Sales Volume',
              data: [30, 50, 60, 80, 50, 40, 30],
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            r: {
              beginAtZero: true
            }
          }
        }
      });
    } else {
      console.error('Canvas context not found.');
    }
  }
  stations = [
    {
      icon: 'https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:372228fd-9afe-4a10-b251-af977b41e290;revision=0?component_id=0ddadf50-e08d-4561-aa36-a02f4d315a8e&api_key=CometServer1&access_token=1731755685_urn%3Aaaid%3Asc%3AUS%3A372228fd-9afe-4a10-b251-af977b41e290%3Bpublic_4d2dfbcb744f2ef8866463810bec73741ad9ea7a',
      name: 'Station 1',
      value: '62,721 m³',
      progress: 50
    },
    {
      icon: 'https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:372228fd-9afe-4a10-b251-af977b41e290;revision=0?component_id=0ddadf50-e08d-4561-aa36-a02f4d315a8e&api_key=CometServer1&access_token=1731755685_urn%3Aaaid%3Asc%3AUS%3A372228fd-9afe-4a10-b251-af977b41e290%3Bpublic_4d2dfbcb744f2ef8866463810bec73741ad9ea7a',
      name: 'Station 2',
      value: '62,721 m³',
      progress: 70
    },
    {
      icon: 'https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:372228fd-9afe-4a10-b251-af977b41e290;revision=0?component_id=0ddadf50-e08d-4561-aa36-a02f4d315a8e&api_key=CometServer1&access_token=1731755685_urn%3Aaaid%3Asc%3AUS%3A372228fd-9afe-4a10-b251-af977b41e290%3Bpublic_4d2dfbcb744f2ef8866463810bec73741ad9ea7a',
      name: 'Station 3',
      value: null, 
      progress: 30
    }
  ];
}
