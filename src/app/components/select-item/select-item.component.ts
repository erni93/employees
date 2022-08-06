import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'employees-select-item',
  templateUrl: './select-item.component.html',
  styleUrls: ['./select-item.component.scss']
})
export class SelectItemComponent implements OnInit {
  @Input() defaultValue: string;
  @Input() values: string[] = [];
  @Output() selected = new EventEmitter<string>();

  public form: FormGroup;

  constructor(private fb: FormBuilder) {}

  public ngOnInit(): void {
    this.form = this.buildForm();
    this.form.get('selected')!.valueChanges.subscribe(value => this.selected.emit(value));
  }

  private buildForm(): FormGroup {
    return this.fb.group({
      selected: [this.defaultValue],
    });
  }

}
