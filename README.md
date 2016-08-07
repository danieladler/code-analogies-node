# code-analogies

## TODO:
Gotta have a plan. Below is a loose (and loosely ordered) outline of the steps ahead. NB: Each section will likely be a branch composed of a few commits. 'Hahn' refers to the very helpful *Express in Action* by Evan Hahn.

- *Unfiled*:
  - testing
  - users
  - assets
  - deployment

### Hello, World
- Hello, World! with Express
  - ~~HW from single file (Hahn, p16)~~
  - ~~Require Handlebars and put HW markup in a .hbs template~~
  
* * *

### Data Model
- Marionette
  - Create Backbone.Marionette model/collection/view logic
  - Add a couple routes (Hahn, p40) and render homepage & a fake 'my posts' page, in separate templates (Hahn, p43)
  - In each template, show different groups of static instances (Hahn, p43 – 49)

* * *

### Styling
- Bring in Foundation 6
- Draft-quality  styling with uncomplicated CSS, using a couple Foundation 6 features to make sure it's working.

* * *

### ES6 Setup
- webpack.config:
  - babel for modular structure, from require to export/import
  - .hbs helpers (test by putting a helper in template)
  - sass compilation; change CSS to SASS

* * *

### Data
- MongoDB setup (Hahn, p119)
- Dynamically read/write models from db

* * *
