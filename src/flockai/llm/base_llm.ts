export abstract class BaseLLM {
    /**
     * The model to use for the LLM.
     */
    private readonly model: string;
    /**
     * The temperature to use for the LLM.
     */
    private readonly temperature: number;

    /**
     * @param model The model to use for the LLM.
     * @param temperature The temperature to use for the LLM.
     */
    constructor(model: string, temperature: number) {
        this.model = model;
        this.temperature = temperature;
    }

    /**
     * Call the LLM with a prompt.
     * @param prompt The prompt to call the LLM with.
     * @returns The response from the LLM.
     */
    abstract call(prompt: string): Promise<string>;

    /**
     * Get the context window size for the LLM.
     * @returns The context window size for the LLM.
     */
    abstract get_context_window_size(): number;
   
    get_model(): string {
        return this.model;
    }

    get_temperature(): number {
        return this.temperature;
    }
}