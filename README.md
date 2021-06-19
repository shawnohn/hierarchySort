# hierarchySort

Sorting a category list from a flat database for insert into a hierarchy-constrained one

## How it works

This is a formatted JSON sample input, with one sample child (with both a parent and a child), one child with no children, and sample parent (with no parent)
```yaml
[
  {
    "name": "Accessories",
    "id": 1,
    "parent_id": 20,
  },
  {
    "name": "Watches",
    "id": 57,
    "parent_id": 1
  },
  {
    "name": "Men",
    "id": 20,
    "parent_id": null
  }
]
```

This is a formatted JSON sample solution for the input above:
```yaml
[
  {
    "name": "Men",
    "id": 20,
    "parent_id": null
  },
  {
    "name": "Accessories",
    "id": 1,
    "parent_id": 20
  },
  {
    "name": "Watches",
    "id": 57,
    "parent_id": 1
  }
]
```

## Usage

* node app {path-to-input-Json} {path-to-output-Json}

Example:
    
    $ node app input.json output.json   
