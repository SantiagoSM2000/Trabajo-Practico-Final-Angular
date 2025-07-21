import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ViandaData } from '../vianda-data';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-add-vianda',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-vianda.html',
  styleUrl: './add-vianda.scss'
})
export class AddVianda {
  viandaForm: FormGroup;
  submitted = false;
  success = false;

  constructor(
    private fb: FormBuilder,
    private viandaData: ViandaData,
    private router: Router
  ) {
    this.viandaForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      stock: [0, [Validators.required, Validators.min(0)]],
      image: ['', Validators.required]
    });
  }

  onSubmit() {
  this.submitted = true;
  if (this.viandaForm.valid) {
    this.viandaData.addVianda(this.viandaForm.value).subscribe(() => {
      this.success = true;
      this.viandaForm.reset();
      this.submitted = false;
      this.router.navigate(['/viandas']); 
    });
  }
}
}