import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetAdmChannelRequest, GetAdmChannelResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetAdmChannelCommandInput extends GetAdmChannelRequest {
}
export interface GetAdmChannelCommandOutput extends GetAdmChannelResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about the status and settings of the ADM channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetAdmChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetAdmChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetAdmChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAdmChannelCommandInput} for command's `input` shape.
 * @see {@link GetAdmChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetAdmChannelCommand extends $Command<GetAdmChannelCommandInput, GetAdmChannelCommandOutput, PinpointClientResolvedConfig> {
    readonly input: GetAdmChannelCommandInput;
    constructor(input: GetAdmChannelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAdmChannelCommandInput, GetAdmChannelCommandOutput>;
    private serialize;
    private deserialize;
}
