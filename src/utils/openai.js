import OpenAI from 'openai';
import { OPENAI_KEY } from './constant';


const openai = new OpenAI({
  apiKey:OPENAI_KEY, // defaults to process.env["OPENAI_API_KEY"]
  dangerouslyAllowBrowser: true // its giving permission to openai api call in client side
  
});

export default openai;
