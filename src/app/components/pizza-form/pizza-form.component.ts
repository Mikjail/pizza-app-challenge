import { FormGroup, FormArray } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-pizza-form',
  templateUrl: './pizza-form.component.html',
  styleUrls: ['./pizza-form.component.scss']
})
export class PizzaFormComponent implements OnInit {
  @Input()
  pizzasForm: FormArray;

  @Output()
  add = new EventEmitter<any>();

  @Output()
  submitOrder = new EventEmitter<any>();

  toppings = [
    'bacon', 'pepperoni', 'mushroom', 'olive', 'basil', 'sweetcorn',
    'onion', 'tomato'];

  value = [];

  isCollapsed: boolean[] = [];

  constructor() { }

  ngOnInit() {
    this.isCollapsed[0] = false;
  }

  addPizza() {
    this.add.emit();
    this.isCollapsed[this.value.length - 1] = true;
  }

  onSubmit() {
    for (let index = 0; index < this.value.length; index++) {
      const toppingsForm = this.pizzasForm.controls[index] as FormGroup;
      toppingsForm.controls.toppings.value.push(this.value[index]);
    }

    this.submitOrder.emit(this.pizzasForm);
  }

  updateTopping(topping: string, i) {
    if (!this.value[i]) {
      this.value[i] = [];
    }
    if (this.value[i].includes(topping)) {
      this.value[i] = this.value[i].filter((x: string) => topping !== x);
    } else {
      this.value[i].push(topping);
    }
    this.pizzasForm.controls[i].get('toppings').setValue(this.value[i]);
  }
}
