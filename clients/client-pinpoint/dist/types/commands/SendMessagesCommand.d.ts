import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { SendMessagesRequest, SendMessagesResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SendMessagesCommandInput extends SendMessagesRequest {
}
export interface SendMessagesCommandOutput extends SendMessagesResponse, __MetadataBearer {
}
/**
 * <p>Creates and sends a direct message.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, SendMessagesCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, SendMessagesCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new SendMessagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendMessagesCommandInput} for command's `input` shape.
 * @see {@link SendMessagesCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SendMessagesCommand extends $Command<SendMessagesCommandInput, SendMessagesCommandOutput, PinpointClientResolvedConfig> {
    readonly input: SendMessagesCommandInput;
    constructor(input: SendMessagesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SendMessagesCommandInput, SendMessagesCommandOutput>;
    private serialize;
    private deserialize;
}
