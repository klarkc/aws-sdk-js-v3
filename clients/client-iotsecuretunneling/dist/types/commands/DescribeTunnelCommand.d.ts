import { IoTSecureTunnelingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSecureTunnelingClient";
import { DescribeTunnelRequest, DescribeTunnelResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeTunnelCommandInput extends DescribeTunnelRequest {
}
export interface DescribeTunnelCommandOutput extends DescribeTunnelResponse, __MetadataBearer {
}
/**
 * <p>Gets information about a tunnel identified by the unique tunnel id.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSecureTunnelingClient, DescribeTunnelCommand } from "@aws-sdk/client-iotsecuretunneling"; // ES Modules import
 * // const { IoTSecureTunnelingClient, DescribeTunnelCommand } = require("@aws-sdk/client-iotsecuretunneling"); // CommonJS import
 * const client = new IoTSecureTunnelingClient(config);
 * const command = new DescribeTunnelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTunnelCommandInput} for command's `input` shape.
 * @see {@link DescribeTunnelCommandOutput} for command's `response` shape.
 * @see {@link IoTSecureTunnelingClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeTunnelCommand extends $Command<DescribeTunnelCommandInput, DescribeTunnelCommandOutput, IoTSecureTunnelingClientResolvedConfig> {
    readonly input: DescribeTunnelCommandInput;
    constructor(input: DescribeTunnelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTSecureTunnelingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTunnelCommandInput, DescribeTunnelCommandOutput>;
    private serialize;
    private deserialize;
}
