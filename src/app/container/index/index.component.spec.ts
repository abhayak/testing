import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComponent } from './index.component';
import { AuthenticationnService } from 'src/app/_service/authenticationn.service';

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexComponent ],
      providers: [{
        provide: AuthenticationnService,

      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
