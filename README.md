This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Features

### UI 
### Register
<img width="1725" alt="User-Register" src="https://github.com/swoichha/next-blog-app/assets/17021686/982a4a25-6ff2-4f8d-a24d-69a2f644d7cf">

### Admin Dashboard

https://github.com/swoichha/next-blog-app/assets/17021686/4a53aa65-add9-4234-bc8f-7d616035192a


## Grouping App Router

A [route group](https://nextjs.org/docs/app/building-your-application/routing/route-groups) can be created by wrapping a folder's name in parenthesis: (folderName)

## Layouts

A [layout](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#layouts) is UI that is shared between multiple routes. On navigation, layouts preserve state, remain interactive, and do not re-render. Layouts can also be nested.

## Style
All comman CSS are added in the `globals.css` file

## API
For testing purpose I am using [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

1. post data: https://jsonplaceholder.typicode.com/posts
2. user data:  https://jsonplaceholder.typicode.com/users


## MongoDB:

1. Create free cluster on MongoDB Atlas
2. Use following:
`mongodb+srv://<username>:<password>@cluster0.2ygtffb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
3. Install: `npm install mongodb`

Now install Mongoose

`npm install mongoose@8.0.0   `

## Authentication

Using [Auth.js](https://authjs.dev/reference/nextjs_) to autheticate user.
For Credentials: https://authjs.dev/getting-started/providers/credentials-tutorial
For GitHub: https://authjs.dev/getting-started/providers/oauth-tutorial

### Instalation 
```
npm i npm install next-auth@5.0.0-beta.3
```

Then generate random AUTH_SECRET by `openssl rand -base64 32` and add the AUTH_URL

## Password Encryption

Using `npm i bcrypt` we install [bcryt](https://github.com/kelektiv/node.bcrypt.js)  
