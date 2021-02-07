# front-end-with-express
A personal reference of how to connect a front end to an express back end


### Getting Started:

What's new in this repo?

- How to setup static assets, like css and js when using express.

#### Necessary Folders and Files:
```
public/
public/css/styles.css
puplic/js/app.js
```

#### Code to add to index.js
```js
app.use(express.static(__dirname+'/public/'));
```

And that's about it. From inside ejs layouts you can reference static css, front-end javascript, and images from the public folder PATH.