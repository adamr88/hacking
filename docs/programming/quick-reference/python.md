# Python

```python
import this
```

## Effective Python

> 90 specific ways to write better Python

It's not safe to code review alone. Take these with you

### Pythonic Thinking

!!! note "1-10"
	- Know Which Version of Python You're Using
	- Follow the PEP 8 Style Guide
	- Know the Differences Between bytes and str
	- Prefer Interpolated F-Strings Over C-style Format Strings and str.format
	- Write Helper Functions Instead of Complex Expressions
	- Prefer Multiple Assignment Unpacking Over Indexing
	- Prefer enumerate Over range
	- Use zip to Process Iterators in Parallel
	- Avoid else Blocks After for and while Loops
	- Prevent Repetition with Assignment Expressions

### Lists and Dictionaries

!!! note "11-18"
	- Know How to Slice Sequences
	- Avoid Striding and Slicing in a Single Expression
	- Prefer Catch-All Unpacking Over Slicing
	- Sort by Complex Criteria Using the key Parameter
	- Be Cautious When Relying on dict Insertion Ordering
	- Prefer get Over in and KeyError to Handle Missing Dictionary Keys
	- Prefer defaultdict Over setdefault to Handle Missing Items in Internal State
	- Know How to Construct Key-Dependent Default Values with `__missing__`

### Functions

!!! note "19-26"
	- Never Unpack More Than Three Variables When Functions Return Multiple Values
	- Prefer Raising Exceptions to Returning None
	- Know How Closures Interact with Variable Scope
	- Reduce Visual Noise with Variable Positional Arguments
	- Provide Optional Behavior with Keyword Arguments
	- Use None and Docstrings to Specify Dynamic Default Arguments
	- Enforce Clarity with Keyword-Only and Positional-Only Arguments
	- Define Function Decorators with `functools.wraps`

### Comprehensions and Generators

!!! note "27-36"
	- Use Comprehensions Instead of map and filter
	- Avoid More Than Two Control Subexpressions in Comprehensions
	- Avoid Repeated Work in Comprehensions by Using Assignment Expressions
	- Consider Generators Instead of Returning Lists
	- Be Defensive When Iterating Over Arguments
	- Consider Generator Expressions for Large List Comprehensions
	- Compose Multiple Generators with yield from
	- Avoid Injecting Data into Generators with send
	- Avoid Causing State Transitions in Generators with throw
	- Consider itertools for Working with Iterators and Generators

### Classes and Interfaces

!!! note "37-43"
	- Compose Classes Instead of Nesting Many Levels of Built-in Types
	- Accept Functions Instead of Classes for Simple Interfaces
	- Use `@classmethod` Polymorphism to Construct Objects Generically
	- Initialize Parent Classes with super
	- Consider Composing Functionality with Mix-in Classes
	- Prefer Public Attributes Over Private Ones
	- Inherit from collections.abc for Custom Container Types

### Metaclasses and Attributes

!!! note "44-51"
	- Use Plain Attributes Instead of Setter and Getter Methods
	- Consider @property Instead of Refactoring Attributes
	- Use Descriptors for Reusable @property Methods
	- Use `__getattr__`, `__getattribute__`, and `__setattr__` for Lazy Attributes
	- Validate Subclasses with `__init_subclass__`
	- Register Class Existence with `__init_subclass__`
	- Annotate Class Attributes with `__set_name__`
	- Prefer Class Decorators Over Metaclasses for Composable Class Extensions

### Concurrency and Parallelism

!!! note "52-64"
	- Use subprocess to Manage Child Processes
	- Use Threads for Blocking I/O, Avoid for Parallelism
	- Use Lock to Prevent Data Races in Threads
	- Use Queue to Coordinate Work Between Threads
	- Know How to Recognize When Concurrency Is Necessary
	- Avoid Creating New Thread Instances for On-demand Fan-out
	- Understand How Using Queue for Concurrency Requires Refactoring
	- Consider ThreadPoolExecutor When Threads Are Necessary for Concurrency
	- Achieve Highly Concurrent I/O with Coroutines
	- Know How to Port Threaded I/O to asyncio
	- Mix Threads and Coroutines to Ease the Transition to asyncio
	- Avoid Blocking the asyncio Event Loop to Maximize Responsiveness
	- Consider concurrent.futures for True Parallelism

### Robustness and Performance

!!! note "65-74"
	- Take Advantage of Each Block in try/except /else/finally
	- Consider contextlib and with Statements for Reusable try/finally Behavior
	- Use datetime Instead of time for Local Clocks
	- Make pickle Reliable with copyreg
	- Use decimal When Precision Is Paramount
	- Profile Before Optimizing
	- Prefer deque for Producer-Consumer Queues
	- Consider Searching Sorted Sequences with bisect
	- Know How to Use heapq for Priority Queues
	- Consider memoryview and bytearray for Zero-Copy Interactions with bytes

### Testing and Debugging

!!! note "75-81"
	- Use repr Strings for Debugging Output
	- Verify Related Behaviors in TestCase Subclasses
	- Isolate Tests from Each Other with setUp, tearDown, setUpModule, and tearDownModule
	- Use Mocks to Test Code with Complex Dependencies
	- Encapsulate Dependencies to Facilitate Mocking and Testing
	- Consider Interactive Debugging with pdb
	- Use tracemalloc to Understand Memory Usage and Leaks

### Collaboration

!!! note "82-90"
	- Know Where to Find Community-Built Modules
	- Use Virtual Environments for Isolated and Reproducible Dependencies
	- Write Docstrings for Every Function, Class, and Module
	- Use Packages to Organize Modules and Provide Stable APIs
	- Consider Module-Scoped Code to Configure Deployment Environments
	- Define a Root Exception to Insulate Callers from APIs
	- Know How to Break Circular Dependencies
	- Consider warnings to Refactor and Migrate Usage
	- Consider Static Analysis via typing to Obviate Bugs

## Links

### Essential libraries

- [Python Argparser](https://docs.python.org/3/library/argparse.html)
- [Python Collections](https://docs.python.org/3/library/collections.html)
- [Python Data Classes](https://docs.python.org/3/library/dataclasses.html)
- [Python Standard Library](https://docs.python.org/3/library/)

### Essential packages

- [Python Click](https://click.palletsprojects.com/en/8.1.x/) Argument Parser
- [Python Django](https://www.djangoproject.com/) Content Management Framework
- [Python Requests](https://pypi.org/project/requests/) Http Requests Library

## See also

- [Cheat Sheet of Python Mock](http://www.ines-panker.com/2020/06/01/python-mock.html)
- [Peter Norvig](https://norvig.com/)

### Essential tools

- [Poetry](https://python-poetry.org/) Package Manager
- [Pyenv](https://github.com/pyenv/pyenv) Environment Manager

### Essential libraries continued

- [Python Itertools](https://docs.python.org/3/library/itertools.html)
- [Python Functools](https://docs.python.org/3/library/functools.html)
- [Python Logging](https://docs.python.org/3/library/logging.html)
