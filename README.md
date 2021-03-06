# [Schema Generator](https://DataStep.io/)

## Generate magical auto-typed code & database interfaces!

> An Open Source joint by [Dan Levy](https://danlevy.net/) ✨

This project ([Schema **Generator**](https://github.com/justsml/schema-generator)) is a web app with usage example for it's sister library [Schema **Analyzer**](https://github.com/justsml/schema-analyzer). The _Analyzer_ library provides an automatic data type analysis on any given array of objects.

The components included here support **JSON/CSV data!**

## Mini Demo

![./demo_80.gif](./demo_80.gif "using built-in sample analysis")

### Features

#### The primary goal is to support any input JSON/CSV and infer as much as possible. More data will generally yield better results.

- [x] Support SQL & noSQL systems!
- [x] Automatic type detection!
- [x] Detects String & Number size constraints (for SQL backends)!
- [x] Handles error/outliers intelligently
- [x] Ignores error/outlier records!
- [x] Smart field name formatting, snake-case vs. camel-case!
- [x] Detects unique columns!
- [x] Detects enum Fields!
- [x] Detects `Not Null` fields!
- [x] Extensible design, add new output/target with ease!
- [ ] Nested data structure & multi-table relational output - **Coming soon**

### Currently Supports...

- [x] Mongoose Schema definition - https://mongoosejs.com/
- [x] Knex Migration scripts - https://knexjs.org
- [x] TypeScript Types
- [ ] SQL DDL script (Data-definition language) - **Coming soon**
- [ ] Validation Code for Libraries like `Yup` or `Joi`
- [ ] JSON Schemas (for libraries like `ajv`)
- [ ] Binary Encoders (protobufs, thrift, avro?)
- [ ] JPA
- [ ] Ruby/Rails
