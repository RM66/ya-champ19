const doo = require("./E");

const data = {
  "type": "File",
  "start": 0,
  "end": 63,
  "program": {
    "type": "Program",
    "start": 0,
    "end": 63,
    "sourceType": "script",
    "interpreter": null,
    "body": [
      {
        "type": "ExpressionStatement",
        "start": 0,
        "end": 30,
        "expression": {
          "type": "AssignmentExpression",
          "start": 0,
          "end": 29,
          "operator": "=",
          "left": {
            "type": "MemberExpression",
            "start": 0,
            "end": 24,
            "object": {
              "type": "CallExpression",
              "start": 0,
              "end": 12,
              "callee": {
                "type": "MemberExpression",
                "start": 0,
                "end": 3,
                "object": {
                  "type": "Identifier",
                  "start": 0,
                  "end": 1,
                  "name": "X"
                },
                "property": {
                  "type": "Identifier",
                  "start": 2,
                  "end": 3,
                  "name": "n"
                },
                "computed": false
              },
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 4,
                  "end": 11,
                  "properties": [
                    {
                      "type": "ObjectProperty",
                      "start": 5,
                      "end": 10,
                      "method": false,
                      "key": {
                        "type": "Identifier",
                        "start": 5,
                        "end": 6,
                        "name": "a"
                      },
                      "computed": false,
                      "shorthand": false,
                      "value": {
                        "type": "StringLiteral",
                        "start": 8,
                        "end": 10,
                        "extra": {
                          "rawValue": "",
                          "raw": "''"
                        },
                        "value": ""
                      }
                    }
                  ]
                }
              ]
            },
            "property": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
              "name": "w"
            },
            "computed": false
          },
          "right": {
            "type": "ObjectExpression",
            "start": 27,
            "end": 29,
            "properties": []
          }
        }
      },
      {
        "type": "ExpressionStatement",
        "start": 32,
        "end": 62,
        "expression": {
          "type": "AssignmentExpression",
          "start": 32,
          "end": 61,
          "operator": "=",
          "left": {
            "type": "MemberExpression",
            "start": 32,
            "end": 56,
            "object": {
              "type": "CallExpression",
              "start": 32,
              "end": 44,
              "callee": {
                "type": "MemberExpression",
                "start": 32,
                "end": 35,
                "object": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 33,
                  "name": "X"
                },
                "property": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 35,
                  "name": "n"
                },
                "computed": false
              },
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 36,
                  "end": 43,
                  "properties": [
                    {
                      "type": "ObjectProperty",
                      "start": 37,
                      "end": 42,
                      "method": false,
                      "key": {
                        "type": "Identifier",
                        "start": 37,
                        "end": 38,
                        "name": "a"
                      },
                      "computed": false,
                      "shorthand": false,
                      "value": {
                        "type": "StringLiteral",
                        "start": 40,
                        "end": 42,
                        "extra": {
                          "rawValue": "",
                          "raw": "''"
                        },
                        "value": ""
                      }
                    }
                  ]
                }
              ]
            },
            "property": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
              "name": "l"
            },
            "computed": false
          },
          "right": {
            "type": "ObjectExpression",
            "start": 59,
            "end": 61,
            "properties": []
          }
        }
      }
    ],
    "directives": []
  }
};
/*
Если прогнать через @babel/generator, получится
X.n({
  a: ''
}).w = {};
X.n({
  a: ''
}).l = {};
*/

console.log(doo(data));
/*
[
  {
    "type": "Identifier",
    "start": 23,
    "end": 24,
    "name": "w"
  }
]
*/