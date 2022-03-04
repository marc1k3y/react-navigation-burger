# demo
https://marc1k3y.github.io/web-site/

## How use?

`npm i react-nav-burger`

```
import Burger from "react-nav-burger"

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
navbarBckg => optional
activeLinkBckg => optional
linkTextColor => optional
```