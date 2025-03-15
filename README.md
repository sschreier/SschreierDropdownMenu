# An extension for a dropdown menu for Shopware 6

An extension for a dropdown menu from _992 pixels_. The navigation menu item _Home_ can also be hidden or can be replaced by a house icon.

## Possible Configurations
 - activate the dropdown menu
 - set the shadow of the dropdown menu (*1)
 - set the distance to the left of the dropdown menu in pixels (*1)
 - set the min width of the dropdown menu in pixels (*1)
 - set the font size of the dropdown menu in pixels (*1)
 - set the padding of the dropdown menu (*1)
 - show the menu right-aligned
 - open the dropdown menus always to the left
 - open the dropdown menus of the last main navigation menu item of a line of a full-surface or multi-line menu to the left
 - select the number of main navigation menu items where the dropdown menu should open to the left
 - set the minimum number of main navigation menu items per line from which the opening of the dropdown menu to the left should be checked
 - set the distance of the text to the left for a left-opening dropdown menu in pixels (*1)
 - activate the sticky effect for the menu
 - set the position in pixels from which the menu should receive the sticky effect
 - select the viewports in which the menu should receive the sticky effect
 - set the duration of the animation in milliseconds (*1)
 - set the z-index value of the menu with sticky effect (*1)
 - set the background color of the menu with sticky effect (*1)
 - set the font color of the navigation menu items of the menu with sticky effect (*1)
 - set the hover font color of the navigation menu items of the menu with sticky effect (*1)
 - set the border bottom value (*1)
 - show the navigation menu item _Home_
 - replace the navigation menu item _Home_ with a house icon

## Some changes in the settings within the configuration are not immediately visible in the frontend of the shop
After changing settings specifically for the appearance of the dropdown menu (*1), the theme must be recompiled, for example by saving the theme in the administration:
1. Switch to "Content" and "Themes"
2. Select the active theme
3. Click on the button "Save"

## How to install the extension
### via zip and console (recommended)
1. Download the latest _SschreierDropdownMenu-master.zip_.
2. Unzip the zip file and rename the folder to _SschreierDropdownMenu_. 
3. Move the folder to the project folder _custom/plugins/_ .
4. Connect to the console via ssh:

```
bin/console plugin:refresh
bin/console plugin:install --activate SschreierDropdownMenu
```

### via composer
1. Add the repository URL to the composer.json of the project
```
"repositories": [
    ...,
    {
        "type": "vcs",
        "url": "https://github.com/sschreier/SschreierDropdownMenu"
    }
],
```

2. Connect to the console via ssh and install the plugin via the command
```
composer require sschreier/sschreierdropdownmenu
bin/console plugin:refresh
bin/console plugin:install --activate SschreierDropdownMenu
```

### via https://packagist.org
- Connect to the console via ssh and install the plugin via the command
```
composer require sschreier/sschreierdropdownmenu
bin/console plugin:refresh
bin/console plugin:install --activate SschreierDropdownMenu
```

### via zip upload
1. Download the latest _SschreierDropdownMenu-master.zip_.
2. Unzip the zip file and rename the folder to _SschreierDropdownMenu_.
3. Zip the folder to _SschreierDropdownMenu.zip_.
4. Upload the zip in the Shopware Administration.
5. Install & Activate the extension.

#### extension update (zip)
1. Download the latest _SschreierDropdownMenu-master.zip_.
2. Unzip the zip file and rename the folder to _SschreierDropdownMenu_.
3. Zip the folder to _SschreierDropdownMenu.zip_.
4. Upload the zip in the Shopware Administration.
5. Update the extension.

## Images

### default navigation menu with dropdown menu

![default navigation menu with dropdown menu](https://www.sebastianschreier.de/plugins/sschreierDropdownmenu/sschreierDropdownmenu-Image1.jpg)

### default navigation menu with dropdown menu with hover about navigation menu item Music

![default navigation menu with hover about navigation menu item Music](https://www.sebastianschreier.de/plugins/sschreierDropdownmenu/sschreierDropdownmenu-Image2.jpg)

### default navigation menu with dropdown menu with hover about navigation menu item  Music, Books & Games

![default navigation menu with dropdown menu with hover about navigation menu item  Music, Books & Games](https://www.sebastianschreier.de/plugins/sschreierDropdownmenu/sschreierDropdownmenu-Image3.jpg)

### default navigation menu with dropdown menu with hover about navigation menu item women where the dropdown menu open to the left

![default navigation menu with dropdown menu with hover about navigation menu item women where the dropdown menu open to the left](https://www.sebastianschreier.de/plugins/sschreierDropdownmenu/sschreierDropdownmenu-Image16.jpg)

### sticky navigation menu with dropdown menu

![sticky navigation menu with dropdown menu](https://www.sebastianschreier.de/plugins/sschreierDropdownmenu/sschreierDropdownmenu-Image4.jpg)

### sticky navigation menu with dropdown menu with hover about navigation menu item Music

![sticky navigation menu with dropdown menu with hover about navigation menu item Music](https://www.sebastianschreier.de/plugins/sschreierDropdownmenu/sschreierDropdownmenu-Image5.jpg)

### sticky navigation menu with dropdown menu where the navigation menu item Home was replaced by a house icon

![sticky navigation menu with dropdown menu where the navigation menu item Home was replaced by a house icon](https://www.sebastianschreier.de/plugins/sschreierDropdownmenu/sschreierDropdownmenu-Image6.jpg)

### sticky navigation menu with dropdown menu where the navigation menu item Home has been hidden

![sticky navigation menu with dropdown menu where the navigation menu item Home has been hidden](https://www.sebastianschreier.de/plugins/sschreierDropdownmenu/sschreierDropdownmenu-Image7.jpg)

### default navigation menu without dropdown menu

![default navigation menu without dropdown menu](https://www.sebastianschreier.de/plugins/sschreierDropdownmenu/sschreierDropdownmenu-Image8.jpg)

### default navigation menu without dropdown menu with hover about navigation menu item Music

![default navigation menu without hover about navigation menu item Music](https://www.sebastianschreier.de/plugins/sschreierDropdownmenu/sschreierDropdownmenu-Image9.jpg)

### sticky navigation menu without dropdown menu

![sticky navigation menu without dropdown menu](https://www.sebastianschreier.de/plugins/sschreierDropdownmenu/sschreierDropdownmenu-Image10.jpg)

### sticky navigation menu without dropdown menu with hover about navigation menu item Music

![sticky navigation menu without dropdown menu with hover about navigation menu item Music](https://www.sebastianschreier.de/plugins/sschreierDropdownmenu/sschreierDropdownmenu-Image11.jpg)

### extension configuration - part 1

![extension configuration - part 1](https://www.sebastianschreier.de/plugins/sschreierDropdownmenu/sschreierDropdownmenu-Image12.jpg)

### extension configuration - part 2

![extension configuration - part 2](https://www.sebastianschreier.de/plugins/sschreierDropdownmenu/sschreierDropdownmenu-Image13.jpg)

### extension configuration - part 3

![extension configuration - part 3](https://www.sebastianschreier.de/plugins/sschreierDropdownmenu/sschreierDropdownmenu-Image14.jpg)

### extension configuration - part 4

![extension configuration - part 4](https://www.sebastianschreier.de/plugins/sschreierDropdownmenu/sschreierDropdownmenu-Image15.jpg)
