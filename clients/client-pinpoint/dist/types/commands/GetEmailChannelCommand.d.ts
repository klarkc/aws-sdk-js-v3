import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetEmailChannelRequest, GetEmailChannelResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetEmailChannelCommandInput extends GetEmailChannelRequest {
}
export interface GetEmailChannelCommandOutput extends GetEmailChannelResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about the status and settings of the email channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetEmailChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetEmailChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetEmailChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEmailChannelCommandInput} for command's `input` shape.
 * @see {@link GetEmailChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetEmailChannelCommand extends $Command<GetEmailChannelCommandInput, GetEmailChannelCommandOutput, PinpointClientResolvedConfig> {
    readonly input: GetEmailChannelCommandInput;
    constructor(input: GetEmailChannelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetEmailChannelCommandInput, GetEmailChannelCommandOutput>;
    private serialize;
    private deserialize;
}
