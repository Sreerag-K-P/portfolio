import OpenAI from "openai";
import { ChatCompletionMessageParam } from "ai/prompts";
import { OpenAIStream, StreamingTextResponse } from "ai";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages = body.messages;
    const openai = new OpenAI();
    const systemMessage: ChatCompletionMessageParam = {
      role: "system",
      content: "You are a bot. You answer all user questions in a way",
    };

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      stream: true,
      messages: [systemMessage, ...messages],
    });
    const stream = OpenAIStream(response);
    return new StreamingTextResponse(stream);
  } catch (error) {
    console.log(error);
  }
}
