import { LexRuntimeV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexRuntimeV2Client";
import { RecognizeTextRequest, RecognizeTextResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RecognizeTextCommandInput extends RecognizeTextRequest {
}
export interface RecognizeTextCommandOutput extends RecognizeTextResponse, __MetadataBearer {
}
/**
 * <p>Sends user input to Amazon Lex. Client applications use this API to send
 *          requests to Amazon Lex at runtime. Amazon Lex then interprets the user input
 *          using the machine learning model that it build for the bot.</p>
 *          <p>In response, Amazon Lex returns the next message to convey to the user
 *          and an optional response card to display.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexRuntimeV2Client, RecognizeTextCommand } from "@aws-sdk/client-lex-runtime-v2"; // ES Modules import
 * // const { LexRuntimeV2Client, RecognizeTextCommand } = require("@aws-sdk/client-lex-runtime-v2"); // CommonJS import
 * const client = new LexRuntimeV2Client(config);
 * const command = new RecognizeTextCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RecognizeTextCommandInput} for command's `input` shape.
 * @see {@link RecognizeTextCommandOutput} for command's `response` shape.
 * @see {@link LexRuntimeV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RecognizeTextCommand extends $Command<RecognizeTextCommandInput, RecognizeTextCommandOutput, LexRuntimeV2ClientResolvedConfig> {
    readonly input: RecognizeTextCommandInput;
    constructor(input: RecognizeTextCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexRuntimeV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RecognizeTextCommandInput, RecognizeTextCommandOutput>;
    private serialize;
    private deserialize;
}
