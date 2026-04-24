// 1.SETS
const numbers = new Set([1, 2, 3]);

// Adding elements
numbers.add(4); // Adds 4 to the Set
numbers.add(3); // Does nothing (3 is a duplicate)

// Checking if an element exists
console.log(numbers.has(3)); // true
console.log(numbers.has(5)); // false

// Iterating over the Set
numbers.forEach((number) => {
  console.log(number);
});

// Getting the size of the Set
console.log(numbers.size); // 4

// Removing an element
numbers.delete(2);

// Clearing the Set
numbers.clear();

// --------------------------------------------------------------------------------
// 2.WEAKSETS
// Create a WeakSet
const weakSet = new WeakSet();

// Create some objects
const obj1 = { id: 1 };
const obj2 = { id: 2 };

// Add objects to the WeakSet
weakSet.add(obj1);
weakSet.add(obj2);

// Check if objects are in the WeakSet
console.log(weakSet.has(obj1)); // true
console.log(weakSet.has(obj2)); // true

// Remove an object from the WeakSet
weakSet.delete(obj1);
console.log(weakSet.has(obj1)); // false

// Example with garbage collection
let tempObject = { temp: "temporary" };
weakSet.add(tempObject); // Adding the object

// Once tempObject is no longer referenced, it will be garbage collected
tempObject = null; // WeakSet will not prevent garbage collection

// --------------------------------------------------------------------------------
// 3.MAPS
const myMap = new Map();

// Adding elements to the Map
myMap.set("name", "Alice");
myMap.set("age", 25);
myMap.set("job", "Engineer");

// Getting values from the Map
console.log(myMap.get("name")); // Output: Alice
console.log(myMap.get("age")); // Output: 25

// Checking if a key exists
console.log(myMap.has("job")); // true
console.log(myMap.has("city")); // false

// Removing an element from the Map
myMap.delete("age");
console.log(myMap.has("age")); // false

// Iterating over the Map
myMap.set("city", "New York");
// Iterate over key-value pairs
for (const [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}

// Iterate over keys
for (const key of myMap.keys()) {
  console.log(key);
}

// Iterate over values
for (const value of myMap.values()) {
  console.log(value);
}

// Clearing the Map
myMap.clear();
console.log(myMap.size); // Output: 0 (Map is empty)

// --------------------------------------------------------------------------------
// 4.WEAKMAPS
const weakMap = new WeakMap();

// Creating objects that will be used as keys
const objweak1 = { id: 1 };
const objweak2 = { id: 2 };

// Adding key-value pairs
weakMap.set(objweak1, "Data for object 1");
weakMap.set(objweak2, "Data for object 2");

// Accessing values
console.log(weakMap.get(objweak1)); // Output: Data for object 1
console.log(weakMap.get(objweak2)); // Output: Data for object 2

// Checking if keys exist
console.log(weakMap.has(objweak1)); // true
console.log(weakMap.has(objweak2)); // true

// Deleting a key-value pair
weakMap.delete(objweak1);
console.log(weakMap.has(objweak1)); // false (after deletion)

// Example of garbage collection
let tempObj = { temp: "temporary" };
weakMap.set(tempObj, "Some temporary data");

// Once tempObj is no longer referenced, it will be removed from the WeakMap
tempObj = null; // The WeakMap entry for tempObj is removed automatically

// --------------------------------------------------------------------------------------------------------
// SETS - Store unique values of any type
// new Set(): Creates an empty Set.
// new Set(iterable): Creates a Set from an iterable (array, string, etc.).
// set.add(value): Adds a value to the Set.
// set.has(value): Returns true if value exists in the Set.
// set.delete(value): Removes a value from the Set.
// set.clear(): Removes all values from the Set.
// set.size: Returns the number of elements in the Set.
// set.forEach(callback): Iterates over Set values.
// set.values(): Returns an iterator of Set values.
// set.keys(): Returns an iterator of Set values (same as values()).
// set.entries(): Returns an iterator of [value, value] pairs.

// SET COMMON OPERATIONS:
// Remove duplicates from array: [...new Set(array)]
// Check if value exists: set.has(value)
// Convert Set to Array: Array.from(set) or [...set]

// --------------------------------------------------------------------------------------------------------
// WEAKSETS - Store weak references to objects only
// new WeakSet(): Creates an empty WeakSet.
// weakSet.add(object): Adds an object to the WeakSet.
// weakSet.has(object): Returns true if object exists in the WeakSet.
// weakSet.delete(object): Removes an object from the WeakSet.
// Cannot iterate over WeakSet (no forEach, keys, values, entries).
// No size property.
// Objects can be garbage collected even if in WeakSet.

// WEAKSET NOTES:
// Only stores objects, primitives are not allowed.
// Uses weak references, allowing garbage collection.
// No size property or iteration methods.
// Good for storing metadata about objects.

// --------------------------------------------------------------------------------------------------------
// MAPS - Store key-value pairs with any type of key
// new Map(): Creates an empty Map.
// new Map(iterable): Creates a Map from an iterable of [key, value] pairs.
// map.set(key, value): Sets a key-value pair in the Map.
// map.get(key): Returns the value for a key.
// map.has(key): Returns true if key exists in the Map.
// map.delete(key): Removes a key-value pair from the Map.
// map.clear(): Removes all key-value pairs from the Map.
// map.size: Returns the number of key-value pairs in the Map.
// map.forEach(callback): Iterates over Map entries.
// map.keys(): Returns an iterator of Map keys.
// map.values(): Returns an iterator of Map values.
// map.entries(): Returns an iterator of [key, value] pairs.

// MAP COMMON OPERATIONS:
// Iterate over entries: for (const [key, value] of map) { }
// Convert Map to Object: Object.fromEntries(map)
// Convert Object to Map: new Map(Object.entries(object))
// Filter Map entries: new Map([...map].filter(condition))

// --------------------------------------------------------------------------------------------------------
// WEAKMAPS - Store weak references to objects as keys
// new WeakMap(): Creates an empty WeakMap.
// weakMap.set(object, value): Sets an object-value pair in WeakMap.
// weakMap.get(object): Returns the value for an object key.
// weakMap.has(object): Returns true if object key exists.
// weakMap.delete(object): Removes an object-value pair.
// Cannot iterate over WeakMap (no forEach, keys, values, entries).
// No size property.
// Object keys can be garbage collected even if in WeakMap.

// WEAKMAP NOTES:
// Only stores objects as keys, primitives are not allowed.
// Uses weak references for keys, allowing garbage collection.
// No size property or iteration methods.
// Good for storing private data associated with objects (similar to WeakMap private fields).

// --------------------------------------------------------------------------------------------------------
// COMPARISON: SET vs MAP vs OBJECT
// SET: Stores unique values, checks membership, no key-value pairs.
// MAP: Stores key-value pairs, supports any key type, has size, ordered.
// OBJECT: Stores key-value pairs, keys are strings/symbols only, unordered.

// WHEN TO USE:
// - SET: Removing duplicates, membership testing, unique collections.
// - MAP: Key-value storage with non-string keys, need size property.
// - WEAKSET: Private metadata about objects, automatic cleanup.
// - WEAKMAP: Private data for objects, automatic memory cleanup.

// --------------------------------------------------------------------------------------------------------