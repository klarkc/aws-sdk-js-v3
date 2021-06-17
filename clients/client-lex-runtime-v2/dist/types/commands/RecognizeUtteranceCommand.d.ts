/// <reference types="node" />
import { LexRuntimeV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexRuntimeV2Client";
import { RecognizeUtteranceRequest, RecognizeUtteranceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
declare type RecognizeUtteranceCommandInputType = Omit<RecognizeUtteranceRequest, "inputStream"> & {
    /**
     * For *`RecognizeUtteranceRequest["inputStream"]`*, see {@link RecognizeUtteranceRequest.inputStream}.
     */
    inputStream?: RecognizeUtteranceRequest["inputStream"] | string | Uint8Array | Buffer;
};
/**
 * This interface extends from `RecognizeUtteranceRequest` interface. There are more parameters than `inputStream` defined in {@link RecognizeUtteranceRequest}
 */
export interface RecognizeUtteranceCommandInput extends RecognizeUtteranceCommandInputType {
}
export interface RecognizeUtteranceCommandOutput extends RecognizeUtteranceResponse, __MetadataBearer {
}
/**
 * <p>Sends user input to Amazon Lex. You can send text or speech. Clients use
 *          this API to send text and audio requests to Amazon Lex at runtime. Amazon Lex
 *          interprets the user input using the machine learning model built for
 *          the bot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexRuntimeV2Client, RecognizeUtteranceCommand } from "@aws-sdk/client-lex-runtime-v2"; // ES Modules import
 * // const { LexRuntimeV2Client, RecognizeUtteranceCommand } = require("@aws-sdk/client-lex-runtime-v2"); // CommonJS import
 * const client = new LexRuntimeV2Client(config);
 * const command = new RecognizeUtteranceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RecognizeUtteranceCommandInput} for command's `input` shape.
 * @see {@link RecognizeUtteranceCommandOutput} for command's `response` shape.
 * @see {@link LexRuntimeV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RecognizeUtteranceCommand extends $Command<RecognizeUtteranceCommandInput, RecognizeUtteranceCommandOutput, LexRuntimeV2ClientResolvedConfig> {
    readonly input: RecognizeUtteranceCommandInput;
    constructor(input: RecognizeUtteranceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexRuntimeV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RecognizeUtteranceCommandInput, RecognizeUtteranceCommandOutput>;
    private serialize;
    private deserialize;
}
export {};
