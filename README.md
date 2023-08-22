# hellpeq
> Just another one list of helpers

[![Code Style: Google](https://img.shields.io/badge/code%20style-google-blueviolet.svg)](https://github.com/google/gts)


<!--READMEQ:docsSection-->
### Functions

- [getRandomArbitrary](README.md#getrandomarbitrary)
- [getRandomBoolean](README.md#getrandomboolean)
- [getRandomIntArbitrary](README.md#getrandomintarbitrary)
- [getRandomIntArbitraryWithStep](README.md#getrandomintarbitrarywithstep)
- [getRandomItemFromArray](README.md#getrandomitemfromarray)
- [getRangeArrayByStep](README.md#getrangearraybystep)

## Functions

### getRandomArbitrary

> **getRandomArbitrary**(`min`, `max`): `number`

Returns random number in range of min and max.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `min` | `number` | Min value |
| `max` | `number` | Max value |

#### Returns

`number`

- random value

#### Defined In

index.ts:11

***

### getRandomBoolean

> **getRandomBoolean**(): `boolean`

Returns random boolean value.

#### Returns

`boolean`

- random true or false

#### Defined In

index.ts:48

***

### getRandomIntArbitrary

> **getRandomIntArbitrary**(`min`, `max`): `number`

Returns random Int number in range of min and max.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `min` | `number` | Min Int value |
| `max` | `number` | Max Int value |

#### Returns

`number`

- random Int value

#### Defined In

index.ts:21

***

### getRandomIntArbitraryWithStep

> **getRandomIntArbitraryWithStep**(
  `min`,
  `max`,
  `step`): `number`

Returns random Int number in range of min and max with step.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `min` | `number` | Min Int value |
| `max` | `number` | Max Int value |
| `step` | `number` | Step value |

#### Returns

`number`

- random Int value

#### Defined In

index.ts:32

***

### getRandomItemFromArray

> **getRandomItemFromArray**<`T`>(`array`): `T`

Returns random item from array.

#### Type parameters

| Parameter | Description |
| :------ | :------ |
| `T` | type of `array` item |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | array of items |

#### Returns

`T`

- random item from array

#### Defined In

index.ts:58

***

### getRangeArrayByStep

> **getRangeArrayByStep**(
  `startAt`,
  `stopAt`,
  `step`): `number`[]

Returns array of number values in range with step.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `startAt` | `number` | first range value |
| `stopAt` | `number` | last range value |
| `step` | `number` | range step value |

#### Returns

`number`[]

- array of range items

#### Defined In

index.ts:69
<!--/READMEQ:docsSection-->


---
© [kostix.dev][kostix-url]


[kostix-url]: https://kostix.dev
[threejs-url]: https://threejs.org
