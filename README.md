# WebBlocks.Factory.js

WebBlocks.Blocks.js is a set of generators and mutators for managing WebBlocks 
semantics within the DOM.

## Status

This implementation is **under development** and **not intended for use**.

## Usage

### Setup

jQuery and the `WebBlocks.Blocks.js` library must be included.

The `WebBlocks.Blocks.Color.js` library should also be included.

### Basic Example: Messages

The library `WebBlocks.Blocks.Message.js` must be included.

#### Creation

##### Initialization

The most basic way to define a message:

```js
var message = new WebBlocks.Blocks.Message({
    'header': 'Heading',
    'content': 'This is some message content',
    'color': 'primary dark'
});
$('body').append(message);
```

##### Setters and Getters

For the message entity, several setters are exposed:

```js
var message = new WebBlocks.Blocks.Message();
message.setHeader('Message Header');
message.setContent('Message Text');
message.setColor('danger');
$('body').append(message);
```

Equivalent getters (`getHeader`, `getContent`, `getColor) and unsetters (`unsetHeader`, `unsetContent`, `unsetColor`) also exist.

##### Shorthand

Adding some short-hand simplifies this:

```js
with(WebBlocks.Blocks) {
    $('body').append(new Message({
        'header': 'Heading',
        'content': 'This is some message content',
        'color': 'primary dark'
    }));
}
```

Use `with` cautiously (see [reference](http://www.yuiblog.com/blog/2006/04/11/with-statement-considered-harmful/)).

#### Mutation

##### Basic

An existing element can be cast into a WebBlocks.Block as:

```js
var block = WebBlocks.Blocks.makeBlock($('div.message'));
// use getters, setters, unsetters, etc. on block
```

##### jQuery Helper

The `jQuery.toBlock.js` library provides a shorthand:

```js
var block = $('#your-message').toBlock();
// use getters, setters, unsetters, etc. on block
```

Note that this method only supports a single block at once; if you have more than one, consider:

```js
$('div.message').each(function(){
    var block = $(this).toBlock();
    // use getters, setters, unsetters, etc. on block
});
```

## License

WebBlocks.Blocks.js is **open-source software** licensed under the BSD 
3-clause license. The full text of the license may be found in the `LICENSE` 
file.

## Credits

This library is written and maintained by Eric Bollens. It would not be 
possible without [jQuery](http://jquery.com).
