import { Component, OnInit } from '@angular/core';
import { DiningSelectorService } from '../../dining-selector.service';

@Component({
  selector: 'af-dining-selector',
  templateUrl: './dining-selector.component.html',
  styleUrls: ['./dining-selector.component.scss'],
})
export class DiningSelectorComponent implements OnInit {
  options: string[] = [];
  selectedOption = '';
  optionToAdd = '';
  error = '';

  constructor(private diningService: DiningSelectorService) {}

  ngOnInit(): void {
    this.getOptions();
  }

  private getOptions() {
    this.options = this.diningService.options;
  }

  private resetMessages() {
    this.selectedOption = '';
    this.error = '';
  }

  private updateSelectedOption(value: string) {
    this.resetMessages();
    this.selectedOption = value;
  }

  addOption() {
    this.resetMessages();
    this.error = this.diningService.addOption(this.optionToAdd) ?? '';
    this.optionToAdd = '';
    this.getOptions();
  }

  deleteOption(option: string) {
    this.optionToAdd = '';
    this.resetMessages();
    this.error = this.diningService.deleteOption(option) ?? '';
    this.getOptions();
  }
  resetOptions() {
    this.optionToAdd = '';
    this.resetMessages();
    this.diningService.resetOptions();
    this.getOptions();
  }
  selectOption() {
    this.optionToAdd = '';
    this.resetMessages();
    this.updateSelectedOption(this.diningService.selectOption());
  }
}
