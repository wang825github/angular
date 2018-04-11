import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const news = [
      { id: 11, title: 'Mr. Nice' },
      { id: 12, title: 'Narco' },
      { id: 13, title: 'Bombasto' },
      { id: 14, title: 'Celeritas' },
      { id: 15, title: 'Magneta' },
      { id: 16, title: 'RubberMan' },
      { id: 17, title: 'Dynama' },
      { id: 18, title: 'Dr IQ' },
      { id: 19, title: 'Magma' },
      { id: 20, title: 'Tornado' }
    ];
    return {news};
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
