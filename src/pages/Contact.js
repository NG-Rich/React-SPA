import React from "react";
import { Layout } from "../layout";

const Contact = () => (
  <Layout>
    <div className="text-2xl">Contact Page</div>
    <form className="flex flex-col space-y-5 w-1/2 m-auto" action="">
      <div className="flex flex-col text-left">
        <label>Name:</label>
        <input className="rounded" type="text"/>
      </div>
      <div className="flex flex-col text-left">
        <label>Email:</label>
        <input className="rounded" type="email"/>
      </div>
      <div className="flex flex-col text-left">
        <label>Message:</label>  
        <textarea className="rounded h-40"></textarea>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Submit
      </button>
    </form>
  </Layout>
)

export default Contact;