export interface Credentials {
  email: string;
  password: string;
}

export interface Auth {
  accessToken: string;
}

export interface Signup {
    email: string
    password: string
    retypePassword: string
    firstName: string
    lastName: string
    address: Address
  }
  
  export interface Address {
    street: string
    zip: string
    city: string
  }
  