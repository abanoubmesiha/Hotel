import {NgModule} from '@angular/core';
import {MatBadgeModule, MatButtonModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    imports: [MatBadgeModule, MatButtonModule, MatSidenavModule,
            MatToolbarModule, MatIconModule],
    exports: [MatBadgeModule, MatButtonModule, MatSidenavModule,
            MatToolbarModule, MatIconModule]
})

export class MaterialModule {}
