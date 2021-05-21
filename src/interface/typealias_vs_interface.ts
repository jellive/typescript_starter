/**
 * function
 */

// typealias

type EatType = (food: string) => void

// interface
interface IEat {
  (food: string): void
}

/**
 * array
 */

// typealias
type PersonList = string[]

// interface
interface IPersonList {
  [index: number]: string
}

/**
 * intersection
 */

interface ErrorHandling {
  success: boolean
  error?: { message: string }
}

interface ArtistsData {
  artists: { name: string }[]
}

// type alias
type ArtistsResponseType = ArtistsData & ErrorHandling

// interface

interface IArtistsResponse extends ArtistsData, ErrorHandling {}

let art: ArtistsResponseType
let iar: IArtistsResponse

/**
 * union types
 */

interface Bird {
  fly(): void
  layEggs(): void
}

interface Fish {
  swim(): void
  layEggs(): void
}

type PetType = Bird | Fish

// interface IPet extends PetType {} // error because it can object or intersection type, not union types,

// class Pet implements PetType {} // this too.

/**
 * Declaration Merging - interface
 * typealias는 merging이 안됨.
 */

interface MergingInterface {
  a: string
}

interface MergingInterface {
  b: string
}

let mi: MergingInterface

// mi.a = 'a' // 둘다 접근 됨. 하나로 합쳐지기 때문.
// mi.b = 'b'
