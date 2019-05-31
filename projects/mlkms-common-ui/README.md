# mlkms-common-ui

An Angular module for common ui.

## Installation

```shell
npm install --save mlkms-common-ui
```

## Usage

Add `MlkmsCommonUiModule` to your app module:

```typescript
import { MlkmsCommonUiModule } from 'mlkms-common-ui';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MlkmsCommonUiModule],
  bootstrap: [AppComponent],
})
class AppModule {}
```

## Options

### `<mlkms-header>`

#### Inputs

| Property name | Type | Default | Description |
| ------------- | ---- | ------- | ----------- |
| toggleBtnPosition | string | `left` | Indicate where the toogle button to trigger sidebar meny should be placed. Available values are `left`, `right`. |
| toggleButtonTemplate | TemplateRef | | Custom UI for toggle button. |
| logoTemplate | TemplateRef | | Custom UI for logo. |
| headerMenuTemplate | TemplateRef | | Custom UI for header menu. |
| userProfileTemplate | TemplateRef | | Custom UI for user profile. |

In your app component, simply use add a `<mlkms-header>` element and add more templates if you want.

```typescript
@Component({
  selector: 'app',
  template: `
    <mlkms-header
      [toggleBtnPosition]="'left'"
      [toggleButtonTemplate]="customToggleSidebar"
      [userProfileTemplate]="isLoggedIn ? userProfileTemplate : loginButton"
    >
    </mlkms-header>

    <ng-template #customToggleSidebar>
      <div class="hambuger-logo-wrapper" (click)="onHambugerButtonClick()">
        <img
          src="assets/img/hambuger.png"
          alt="Sidebar menu toggler"
          class="hambuger-logo"
          width="64"
          height="64">
      </div>
    </ng-template>
  `
})
class AppComponent {}
```

### `<mlkms-footer>`

#### Inputs

| Property name | Type | Default | Description |
| ------------- | ---- | ------- | ----------- |
| fixed | boolean | `false` | To fix footer to the bottom of browser. |

### `<mlkms-sidebar-menu>`

#### Inputs

| Property name | Type | Default | Description |
| ------------- | ---- | ------- | ----------- |
| opened | boolean | `false` | To show or hide sidebar menu. |
| position | string | `left` | To display and hide sidebar menu on the left or on the right of the screen. Available values are `left`, `right`. |

### `<mlkms-login>`

#### Outputs

| Property name | Type | Default | Description |
| ------------- | ---- | ------- | ----------- |
| loginHandler | Function | | To pass user info to external components when user logged in successfully. |
