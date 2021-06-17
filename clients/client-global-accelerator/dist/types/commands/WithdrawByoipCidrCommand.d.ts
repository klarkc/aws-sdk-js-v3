import { GlobalAcceleratorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlobalAcceleratorClient";
import { WithdrawByoipCidrRequest, WithdrawByoipCidrResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface WithdrawByoipCidrCommandInput extends WithdrawByoipCidrRequest {
}
export interface WithdrawByoipCidrCommandOutput extends WithdrawByoipCidrResponse, __MetadataBearer {
}
/**
 * <p>Stops advertising an address range that is provisioned as an address pool.
 * 			You can perform this operation at most once every 10 seconds, even if you specify different address
 * 			ranges each time.</p>
 * 		       <p>It can take a few minutes before traffic to the specified addresses stops routing to AWS because of
 * 			propagation delays.</p>
 * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring Your Own
 * 			IP Addresses (BYOIP)</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, WithdrawByoipCidrCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, WithdrawByoipCidrCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new WithdrawByoipCidrCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link WithdrawByoipCidrCommandInput} for command's `input` shape.
 * @see {@link WithdrawByoipCidrCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class WithdrawByoipCidrCommand extends $Command<WithdrawByoipCidrCommandInput, WithdrawByoipCidrCommandOutput, GlobalAcceleratorClientResolvedConfig> {
    readonly input: WithdrawByoipCidrCommandInput;
    constructor(input: WithdrawByoipCidrCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlobalAcceleratorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<WithdrawByoipCidrCommandInput, WithdrawByoipCidrCommandOutput>;
    private serialize;
    private deserialize;
}
