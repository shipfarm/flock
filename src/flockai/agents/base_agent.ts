import { BaseLLM } from "../llm";

export abstract class BaseAgent {
    private readonly id: string;
    private readonly llm: BaseLLM;
    private readonly tools: Tool[];
    private readonly memory: Memory;
    private readonly name: string;

    constructor(llm: BaseLLM, tools: Tool[]) {
        this.llm = llm;
        this.tools = tools;
    }
}