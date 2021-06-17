import { GlobalAcceleratorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlobalAcceleratorClient";
import { DeprovisionByoipCidrRequest, DeprovisionByoipCidrResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeprovisionByoipCidrCommandInput extends DeprovisionByoipCidrRequest {
}
export interface DeprovisionByoipCidrCommandOutput extends DeprovisionByoipCidrResponse, __MetadataBearer {
}
/**
 * <p>Releases the specified address range that you provisioned to use with your AWS resources
 * 			through bring your own IP addresses (BYOIP) and deletes the corresponding address pool. </p>
 * 		       <p>Before you can release an address range, you must stop advertising it by using <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/WithdrawByoipCidr.html">WithdrawByoipCidr</a> and you must not have
 * 			any accelerators that are using static IP addresses allocated from its address range.
 * 		</p>
 * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring Your Own
 * 			IP Addresses (BYOIP)</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, DeprovisionByoipCidrCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, DeprovisionByoipCidrCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new DeprovisionByoipCidrCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeprovisionByoipCidrCommandInput} for command's `input` shape.
 * @see {@link DeprovisionByoipCidrCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeprovisionByoipCidrCommand extends $Command<DeprovisionByoipCidrCommandInput, DeprovisionByoipCidrCommandOutput, GlobalAcceleratorClientResolvedConfig> {
    readonly input: DeprovisionByoipCidrCommandInput;
    constructor(input: DeprovisionByoipCidrCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlobalAcceleratorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeprovisionByoipCidrCommandInput, DeprovisionByoipCidrCommandOutput>;
    private serialize;
    private deserialize;
}
