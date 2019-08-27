import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CardComponent } from './card.component';
import { StorageService } from 'src/app/services/storage.service';
import { CardService } from 'src/app/services/card.service';
import { By } from '@angular/platform-browser';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let cardService: CardService;
  let storageService: StorageService;

  const oldResetTestingModule = TestBed.resetTestingModule;
  beforeAll(done => (async () => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      declarations: [
        CardComponent
      ],
      imports: [
        RouterTestingModule,
      ],
      providers: [CardService, StorageService]
    });
    await TestBed.compileComponents();

    // prevent Angular from resetting testing module
    TestBed.resetTestingModule = () => TestBed;
  })().then(done).catch(done.fail));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.movie = {
      Title: 'hi',
      Year: '1990',
      imdbID: '123',
      Type: 'movie',
      Poster: 'image',
      Favorite: false
    };
    cardService = TestBed.get(CardService);
    storageService = TestBed.get(StorageService);
    fixture.detectChanges();
  });

  describe('cardClicked', () => {
    it('should call the cardservice opencard method', () => {
      spyOn(cardService, 'openCard');
      component.cardClicked();
      expect(cardService.openCard).toHaveBeenCalled();
    });
  });

  describe('updateFavorite', () => {
    it('should call storageservice addToFavorites', () => {
      spyOn(storageService, 'addToFavorites');
      spyOn(storageService, 'removeFromFavorites');

      const button = fixture.debugElement.query(By.css('.movie__favorite'));
      button.nativeElement.click();

      expect(storageService.addToFavorites).toHaveBeenCalled();
      expect(storageService.removeFromFavorites).not.toHaveBeenCalled();
    });

    it('should call storageservice addToFavorites', () => {
      spyOn(storageService, 'addToFavorites');
      spyOn(storageService, 'removeFromFavorites');
      component.movie.Favorite = true;
      fixture.detectChanges();

      const button = fixture.debugElement.query(By.css('.movie__favorite'));
      button.nativeElement.click();

      expect(storageService.addToFavorites).not.toHaveBeenCalled();
      expect(storageService.removeFromFavorites).toHaveBeenCalled();
    });
  });


  afterAll(() => {
    // reinstate resetTestingModule method
    TestBed.resetTestingModule = oldResetTestingModule;
    TestBed.resetTestingModule();
  });
});
