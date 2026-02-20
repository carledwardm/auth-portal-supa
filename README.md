# User Portal Auth with Supabase

A simple login portal utilizing Supabase Auth, additionally Google OAuth is enabled as well

For information on setting up a project like this yourself, you can view their documentation [here](https://supabase.com/docs/guides/auth)

## Sample account

You can create an account to be added to the auth/database if you wish, but a lot of users may not want to do this just for the
sake of this demo. So, I've created a dummy account to allow users to access the homepage if they wish:

**Email:** test@testemail.com <br>
**Password:** 12345

## Technologies
- React
- Next.js
- TypeScript
- Supabase

## Features
- Email/Password login
- Google OAuth login 
- Minor route guarding 
- Toast notifications

## Setup
- Clone the repository
- Install dependencies: `npm install` or `yarn`
- You will need to place your own supabase project keys into an `.env` file
- `.env` dependencies will have to be imported into the project's `SupaContext.tsx` file

## Usage
- Visit `login` to sign in
- Homepage will redirect non-logged users
- Can also log out via the button located on the homepage