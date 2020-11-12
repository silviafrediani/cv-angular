import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsperienzeProfessionaliComponent } from './esperienze-professionali.component';

describe('EsperienzeProfessionaliComponent', () => {
  let component: EsperienzeProfessionaliComponent;
  let fixture: ComponentFixture<EsperienzeProfessionaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsperienzeProfessionaliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsperienzeProfessionaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
