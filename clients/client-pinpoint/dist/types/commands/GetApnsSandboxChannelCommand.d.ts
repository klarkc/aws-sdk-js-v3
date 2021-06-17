import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetApnsSandboxChannelRequest, GetApnsSandboxChannelResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetApnsSandboxChannelCommandInput extends GetApnsSandboxChannelRequest {
}
export interface GetApnsSandboxChannelCommandOutput extends GetApnsSandboxChannelResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about the status and settings of the APNs sandbox channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetApnsSandboxChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetApnsSandboxChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetApnsSandboxChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetApnsSandboxChannelCommandInput} for command's `input` shape.
 * @see {@link GetApnsSandboxChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetApnsSandboxChannelCommand extends $Command<GetApnsSandboxChannelCommandInput, GetApnsSandboxChannelCommandOutput, PinpointClientResolvedConfig> {
    readonly input: GetApnsSandboxChannelCommandInput;
    constructor(input: GetApnsSandboxChannelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetApnsSandboxChannelCommandInput, GetApnsSandboxChannelCommandOutput>;
    private serialize;
    private deserialize;
}
