import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoldingAssetComponent } from './holding-asset.component';

describe('HoldingAssetComponent', () => {
  let component: HoldingAssetComponent;
  let fixture: ComponentFixture<HoldingAssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoldingAssetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoldingAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
