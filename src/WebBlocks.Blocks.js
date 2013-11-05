if(typeof WebBlocks == 'undefined') WebBlocks = {}

WebBlocks.Blocks = new function(){
    
    var capitalizeFirstCharacter = function(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    
    var createAndInitialize = function(definition){
        
        return initialize($(document.createElement(definition.tag ? definition.tag : 'div')), definition);
        
    }
    
    var initialize = function(obj, definition){
        
        obj = $.extend(obj, definition);
        
        if(!obj._blockMethods)
            obj._blockMethods = []
        
        if(obj.attributes)
            $.each(obj.attributes, function(name, methods){
                name = capitalizeFirstCharacter(name)
                $.each(methods, function(methodName, method){
                    obj[methodName+name] = function(){
                        var returned = method.apply(obj, arguments)
                        return returned ? returned : obj;
                    }
                    obj._blockMethods.push(methodName+name)
                })
            })
        
        if(!obj.setOptions)
            obj.setOptions = function(options){
                var $element = this;
                $.each(options, function(name, value){
                    if($element.attributes[name] && $element.attributes[name].set)
                        $element.attributes[name].set.call($element, value)
                })
                return this;
            }
        
        if(obj.initialize)
            obj.initialize()
        
        return obj;
    }
    
    var _tests = {};
    
    this.makeBlock = function(element, options){
        
        element = $(element)
        
        var blockName = false;
        $.each(_tests, function(name, test){
            if(test(element)){
                blockName = name;
                return false; // exit loop - match found
            }
        })
        
        if(!blockName)
            throw "No block for element";
        
        return WebBlocks.Blocks[blockName].call(element, options);
        
    }
    
    this.addBlock = function(block){
        
        _tests[block.name] = block.test;
        
        WebBlocks.Blocks[block.name] = function(options){
            
            var obj = this.jquery ? initialize(this, new block.definition) : createAndInitialize(new block.definition);
            
            obj._blockName = block.name;
            
            if(options)
                obj.setOptions.call(obj, options);
            
            return obj;
            
        }
        
    }
    
}
