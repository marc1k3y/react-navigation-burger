demo this navBurger <br />
https://marc1k3y.github.io/web-site/

## Using

`npm i react-nav-burger`

```
import {Burger} from "react-nav-burger"

export const Header = () => {

  const links = [
  { to: "/", title: "home" },
  { to: "/about", title: "about" },
  { to: "/projects", title: "projects" }
  ]
  
  return (
    <div>
      <Burger 
        links={links} 
        theme="classic"
        activeLinkBckg="goldenrod" 
        linkTextColor="black" />
    </div>
  )
}
```

### Options
```
links - required
theme - "classic"\"dark"
activeLinkBckg - default "lightgray"
linkTextColor - default "black"
```