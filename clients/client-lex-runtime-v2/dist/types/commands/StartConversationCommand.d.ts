import { LexRuntimeV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexRuntimeV2Client";
import { StartConversationRequest, StartConversationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartConversationCommandInput extends StartConversationRequest {
}
export interface StartConversationCommandOutput extends StartConversationResponse, __MetadataBearer {
}
/**
 * <p>Starts an HTTP/2 bidirectional event stream that enables you to send
 *          audio, text, or DTMF input in real time. After your application starts
 *          a conversation, users send input to Amazon Lex as a stream of events. Amazon Lex
 *          processes the incoming events and responds with streaming text or audio
 *          events.
 *       </p>
 *          <p></p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexRuntimeV2Client, StartConversationCommand } from "@aws-sdk/client-lex-runtime-v2"; // ES Modules import
 * // const { LexRuntimeV2Client, StartConversationCommand } = require("@aws-sdk/client-lex-runtime-v2"); // CommonJS import
 * const client = new LexRuntimeV2Client(config);
 * const command = new StartConversationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartConversationCommandInput} for command's `input` shape.
 * @see {@link StartConversationCommandOutput} for command's `response` shape.
 * @see {@link LexRuntimeV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartConversationCommand extends $Command<StartConversationCommandInput, StartConversationCommandOutput, LexRuntimeV2ClientResolvedConfig> {
    readonly input: StartConversationCommandInput;
    constructor(input: StartConversationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexRuntimeV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartConversationCommandInput, StartConversationCommandOutput>;
    private serialize;
    private deserialize;
}
