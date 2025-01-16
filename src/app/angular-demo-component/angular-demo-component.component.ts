import { Component } from '@angular/core';

import { OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input, SimpleChanges } from '@angular/core';


export interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

@Component({
  selector: 'app-angular-demo-component',
  standalone: true,
  imports: [],
  templateUrl: './angular-demo-component.component.html',
  styleUrls: ['./demo-component.component.scss'],
})
export class AngularDemoComponentComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() title: string = 'Default Title'; // Input property with default value

  // TypeScript variable instantiation
  numberVar: number = 42;
  stringVar: string = 'Hello, World!';
  booleanVar: boolean = true;
  arrayVar: string[] = ['One', 'Two', 'Three'];
  objectVar: { key: string; value: number } = { key: 'example', value: 123 };
  nullableVar: string | null = null; // Nullable type
  readonly readonlyVar: string = 'Read-only value'; // Readonly variable
  unionVar: string | number = 'Can be a string or number'; // Union type

  //interface
  user: User;

  //gets fired when the component is created
  constructor() {
    console.log('Constructor: Component instantiated');

    this.user = {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      isActive: true,
    };

    console.log('this is an interface: ',this.user);
  }

  // Fired when an @Input property changes, and it happens before ngOnInit
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges: Input properties changed', changes);
  }

  // Called once, after the component's inputs are initialized and the first change
  ngOnInit(): void {
    console.log('ngOnInit: Component initialized');
  }

  // Runs after Angular's default change detection during every detection cycle.
  ngDoCheck(): void {
    console.log('ngDoCheck: Change detection cycle triggered');
  }

  // Called once, after Angular projects external content (<ng-content>) into the component.
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit: Content projection initialized');
  }

  //  Runs after every change detection cycle that checks projected content.
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked: Content projection checked');
  }

  //  Called once, after the component's view and its child views are initialized.
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit: Component view initialized');
  }

  // Runs after every change detection cycle that checks the component's view and child views.
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked: Component view checked');
  }

  // Called just before the component is destroyed.
  ngOnDestroy(): void {
    console.log('ngOnDestroy: Component destroyed');
  }
}


/*

+----------------------------+------------+---------------------------------------+---------------------------------------+
| Lifecycle Hook            | Sequence   | When it Fires                         | Purpose                               |
+----------------------------+------------+---------------------------------------+---------------------------------------+
| constructor()             | 1          | When the component is instantiated    | Set up dependencies and initial state|
| ngOnChanges()             | 2          | When an @Input property changes       | React to input changes               |
| ngOnInit()                | 3          | After component initialization        | Initialize component logic           |
| ngDoCheck()               | 4          | After default change detection        | Perform custom change detection logic|
| ngAfterContentInit()      | 5          | After projected content is initialized| Work with projected content          |
| ngAfterContentChecked()   | 6          | After each change detection cycle     | React to content changes             |
| ngAfterViewInit()         | 7          | After the component's view is init.   | Work with view elements              |
| ngAfterViewChecked()      | 8          | After each change detection cycle     | React to view changes                |
| ngOnDestroy()             | 9          | Before the component is destroyed     | Cleanup, unsubscribe, detach listeners|
+----------------------------+------------+---------------------------------------+---------------------------------------+


*/


/*

// ---------------------------------------------
// TypeScript Declarations Cheat Sheet
// ---------------------------------------------

// 1. ANY TYPE
let data: any = "Hello"; // Can hold any type. Avoid overusing for type safety.
data = 42; // Now holds a number
data = { key: "value" }; // Now holds an object

// 2. OPTIONAL PROPERTIES
interface User {
  name?: string; // The `?` makes this property optional
}
const user1: User = {}; // Valid, name is optional
const user2: User = { name: "Alice" }; // Valid, name is provided

// 3. ARRAY TYPES
let numbers: number[] = [1, 2, 3]; // Array of numbers
let strings: string[] = ["one", "two", "three"]; // Array of strings

// 4. UNION TYPES
let id: string | number = 42; // Can be either string or number
id = "ABC123"; // Also valid

// 5. READ-ONLY VARIABLES/PROPERTIES
const readOnlyVar: string = "Cannot be reassigned"; // Constant
interface ReadOnlyExample {
  readonly id: number; // Cannot be changed after assignment
}
const item: ReadOnlyExample = { id: 1 };
// item.id = 2; // Error: Cannot assign to 'id' because it is a read-only property

// 6. NULLABLE TYPES
let nullableValue: string | null = null; // Can hold a string or null
nullableValue = "Not null anymore"; // Valid

// 7. OPTIONAL PARAMETERS
function greet(name?: string): string {
  // Parameter `name` is optional
  return name ? `Hello, ${name}` : "Hello, Guest";
}
console.log(greet()); // "Hello, Guest"
console.log(greet("Alice")); // "Hello, Alice"

// 8. FUNCTIONS WITH RETURN TYPES
function getId(): number {
  return 1; // Returns a number
}
function logMessage(message: string): void {
  console.log(message); // Returns nothing (void)
}

// 9. TYPE ALIASES
type ID = string | number; // Alias for a union type
let productId: ID = 123; // Valid
productId = "SKU-123"; // Also valid

// 10. FLEXIBLE OBJECTS
let flexibleObject: { [key: string]: any } = {}; // Object with dynamic keys
flexibleObject.key1 = "value1"; // Valid
flexibleObject.key2 = 42; // Also valid

// 11. RECORD TYPE
A record type is a utility type that maps a set of keys to a specific type of value. It’s a predefined object type where all keys are of one type, and all values are of another.
let recordExample: Record<string, number> = { key1: 10, key2: 20 };
// A predefined structure for key-value pairs

// 12. TUPLES
// A tuple is a fixed-length array where the types of the elements are known and can be different.

let tupleExample: [string, number] = ["Alice", 42]; // Fixed-length array
// tupleExample = ["Alice"]; // Error: Missing element
// tupleExample = ["Alice", 42, true]; // Error: Extra element

// 13. ENUMS
An enum (short for "enumeration") is a way to define a set of named constants. By default, enums are assigned numeric values starting at 0, but you can customize the values.
enum Color {
  Red, // Default value 0
  Green, // Default value 1
  Blue, // Default value 2
}
let myColor: Color = Color.Green; // Use the enum values
console.log(myColor); // Outputs: 1

// 14. TYPE INFERENCE
let inferredNumber = 42; // TypeScript infers `number` as the type
// inferredNumber = "Hello"; // Error: Type 'string' is not assignable to type 'number'

// 15. CONST VARIABLES
const PI: number = 3.14; // Immutable and must be initialized





*/