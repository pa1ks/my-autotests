class NavComponent {
    get linksNavMenu() {
        return $$('#zak-primary-menu li[id*=menu') // * - starts with
    }

    get firstNavMenuList() {
        return $('#zak-primary-menu li')
    }

    get firstNavMenuList() {
        return $('#zak-primary-menu li')
    }

    get aboutNavMenuList() {
        return $('#menu-item-491')
    }
    
    get shopNavMenuList() {
        return $('#menu-item-567')
    }
    
    get blogNavMenuList() {
        return $('#menu-item-490')
    }
    
    get contactNavMenuList() {
        return $('#menu-item-493')
    }
    
    get accountNavMenuList() {
        return $('#menu-item-619')
    } 
}

export default new NavComponent()