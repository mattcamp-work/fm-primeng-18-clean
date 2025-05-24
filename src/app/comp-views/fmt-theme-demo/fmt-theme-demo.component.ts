import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-fmt-theme-demo',
  templateUrl: './fmt-theme-demo.component.html',
  styleUrls: ['./fmt-theme-demo.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, TabViewModule]
})
export class FmtThemeDemoComponent {
  // Form inputs
  textInput: string = '';
  textareaInput: string = '';
  selectValue: string = 'option1';
  checkboxValue: boolean = false;
  radioValue: string = 'option1';

  // Table data
  tableData = [
    { id: 1, name: 'John Doe', role: 'Developer', status: 'Active' },
    { id: 2, name: 'Jane Smith', role: 'Designer', status: 'Inactive' },
    { id: 3, name: 'Bob Johnson', role: 'Manager', status: 'Active' }
  ];

  // Alert states
  showInfoAlert: boolean = true;
  showSuccessAlert: boolean = true;
  showWarningAlert: boolean = true;
  showErrorAlert: boolean = true;

  // Badge state
  showBadge: boolean = true;

  // Alert close handlers
  closeAlert(type: 'info' | 'success' | 'warning' | 'error'): void {
    switch (type) {
      case 'info':
        this.showInfoAlert = false;
        break;
      case 'success':
        this.showSuccessAlert = false;
        break;
      case 'warning':
        this.showWarningAlert = false;
        break;
      case 'error':
        this.showErrorAlert = false;
        break;
    }
  }

  // Badge close handler
  closeBadge(): void {
    this.showBadge = false;
  }
} 