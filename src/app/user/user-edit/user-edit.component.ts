import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../user.service';
import { Datum } from '../../user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  editUserForm: FormGroup;
  user: Datum | undefined;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.editUserForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      avatar: ['']
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.userService.getUserById(id).subscribe(response => {
        this.user = response.data;
        this.editUserForm.patchValue(this.user);
      });
    }
  }

  onSubmit() {
    if (this.editUserForm.valid) {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.userService.updateUser(id, this.editUserForm.value).subscribe(() => {
          console.log("Usuario editado");
          this.router.navigate(['/users']);
        });
      }
    }
  }
}
