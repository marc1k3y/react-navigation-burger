# demo
https://marc1k3y.github.io/web-site/

## How use?

`npm i react-navigation-burger`

```
import {Burger} from "react-navigation-burger"

export const Header = () => {

  const links = [
  { to: "/", title: "home" },
  { to: "/about", title: "about" },
  { to: "/projects", title: "projects" }
  ]
  
  return (
    <>
      <Burger 
        links={links}
        navbarMarginTop="50px"
        navbarBckg="whitesmoke" 
        activeLinkBckg="lightgray"
        linkTextColor="black" 
      />
    </>
  )
}
```

### Options
```
links => required
navbarMarginTop => required
navbarBckg => optional
activeLinkBckg => optional
linkTextColor => optional
```