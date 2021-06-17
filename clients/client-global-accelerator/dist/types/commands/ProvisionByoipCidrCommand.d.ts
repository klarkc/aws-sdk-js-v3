import { GlobalAcceleratorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlobalAcceleratorClient";
import { ProvisionByoipCidrRequest, ProvisionByoipCidrResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ProvisionByoipCidrCommandInput extends ProvisionByoipCidrRequest {
}
export interface ProvisionByoipCidrCommandOutput extends ProvisionByoipCidrResponse, __MetadataBearer {
}
/**
 * <p>Provisions an IP address range to use with your AWS resources through bring your own IP
 * 			addresses (BYOIP) and creates a corresponding address pool. After the address range is provisioned,
 * 			it is ready to be advertised using <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/AdvertiseByoipCidr.html">
 * 			AdvertiseByoipCidr</a>.</p>
 * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring Your Own
 * 			IP Addresses (BYOIP)</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, ProvisionByoipCidrCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, ProvisionByoipCidrCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new ProvisionByoipCidrCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ProvisionByoipCidrCommandInput} for command's `input` shape.
 * @see {@link ProvisionByoipCidrCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ProvisionByoipCidrCommand extends $Command<ProvisionByoipCidrCommandInput, ProvisionByoipCidrCommandOutput, GlobalAcceleratorClientResolvedConfig> {
    readonly input: ProvisionByoipCidrCommandInput;
    constructor(input: ProvisionByoipCidrCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlobalAcceleratorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ProvisionByoipCidrCommandInput, ProvisionByoipCidrCommandOutput>;
    private serialize;
    private deserialize;
}
