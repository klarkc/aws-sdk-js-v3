import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { SendUsersMessagesRequest, SendUsersMessagesResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SendUsersMessagesCommandInput extends SendUsersMessagesRequest {
}
export interface SendUsersMessagesCommandOutput extends SendUsersMessagesResponse, __MetadataBearer {
}
/**
 * <p>Creates and sends a message to a list of users.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, SendUsersMessagesCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, SendUsersMessagesCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new SendUsersMessagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendUsersMessagesCommandInput} for command's `input` shape.
 * @see {@link SendUsersMessagesCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SendUsersMessagesCommand extends $Command<SendUsersMessagesCommandInput, SendUsersMessagesCommandOutput, PinpointClientResolvedConfig> {
    readonly input: SendUsersMessagesCommandInput;
    constructor(input: SendUsersMessagesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SendUsersMessagesCommandInput, SendUsersMessagesCommandOutput>;
    private serialize;
    private deserialize;
}
