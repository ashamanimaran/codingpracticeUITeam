cd C:\Users\Asha Manimaran\Documents\visualstudiocode\codingpracticeAngularjs\testJasmineInNode
npm init
npm install jasmine --save
C:\Users\Asha Manimaran\Documents\visualstudiocode\codingpracticeAngularjs\testJasmineInNode>node_modules\.bin\jasmine init
will create jasmine.json in spec/support folder.
edit this file to point to your src and spec
from command line run
node_modules\.bin\jasmine

or 

npm test(since you have added test command to package.json)

since this is run with node you can supply the js modules(functions to be tested) to your spec(jasmine test code) using require("./modulename")
