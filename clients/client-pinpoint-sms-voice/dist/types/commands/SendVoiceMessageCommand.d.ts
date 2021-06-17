import { PinpointSMSVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointSMSVoiceClient";
import { SendVoiceMessageRequest, SendVoiceMessageResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SendVoiceMessageCommandInput extends SendVoiceMessageRequest {
}
export interface SendVoiceMessageCommandOutput extends SendVoiceMessageResponse, __MetadataBearer {
}
/**
 * Create a new voice message and send it to a recipient's phone number.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceClient, SendVoiceMessageCommand } from "@aws-sdk/client-pinpoint-sms-voice"; // ES Modules import
 * // const { PinpointSMSVoiceClient, SendVoiceMessageCommand } = require("@aws-sdk/client-pinpoint-sms-voice"); // CommonJS import
 * const client = new PinpointSMSVoiceClient(config);
 * const command = new SendVoiceMessageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendVoiceMessageCommandInput} for command's `input` shape.
 * @see {@link SendVoiceMessageCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SendVoiceMessageCommand extends $Command<SendVoiceMessageCommandInput, SendVoiceMessageCommandOutput, PinpointSMSVoiceClientResolvedConfig> {
    readonly input: SendVoiceMessageCommandInput;
    constructor(input: SendVoiceMessageCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointSMSVoiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SendVoiceMessageCommandInput, SendVoiceMessageCommandOutput>;
    private serialize;
    private deserialize;
}
