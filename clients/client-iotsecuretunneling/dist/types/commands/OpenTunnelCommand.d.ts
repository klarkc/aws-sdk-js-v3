import { IoTSecureTunnelingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSecureTunnelingClient";
import { OpenTunnelRequest, OpenTunnelResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface OpenTunnelCommandInput extends OpenTunnelRequest {
}
export interface OpenTunnelCommandOutput extends OpenTunnelResponse, __MetadataBearer {
}
/**
 * <p>Creates a new tunnel, and returns two client access tokens for clients to use to
 * 			connect to the AWS IoT Secure Tunneling proxy server.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSecureTunnelingClient, OpenTunnelCommand } from "@aws-sdk/client-iotsecuretunneling"; // ES Modules import
 * // const { IoTSecureTunnelingClient, OpenTunnelCommand } = require("@aws-sdk/client-iotsecuretunneling"); // CommonJS import
 * const client = new IoTSecureTunnelingClient(config);
 * const command = new OpenTunnelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link OpenTunnelCommandInput} for command's `input` shape.
 * @see {@link OpenTunnelCommandOutput} for command's `response` shape.
 * @see {@link IoTSecureTunnelingClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class OpenTunnelCommand extends $Command<OpenTunnelCommandInput, OpenTunnelCommandOutput, IoTSecureTunnelingClientResolvedConfig> {
    readonly input: OpenTunnelCommandInput;
    constructor(input: OpenTunnelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTSecureTunnelingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<OpenTunnelCommandInput, OpenTunnelCommandOutput>;
    private serialize;
    private deserialize;
}
