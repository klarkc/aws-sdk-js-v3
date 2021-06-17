import { GlobalAcceleratorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlobalAcceleratorClient";
import { AllowCustomRoutingTrafficRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AllowCustomRoutingTrafficCommandInput extends AllowCustomRoutingTrafficRequest {
}
export interface AllowCustomRoutingTrafficCommandOutput extends __MetadataBearer {
}
/**
 * <p>Specify the Amazon EC2 instance (destination) IP addresses and ports for a VPC subnet endpoint that can receive traffic
 * 			for a custom routing accelerator. You can allow traffic to all destinations in the subnet endpoint, or allow traffic to a
 * 			specified list of destination IP addresses and ports in the subnet. Note that you cannot specify IP addresses or ports
 * 			outside of the range that you configured for the endpoint group.</p>
 * 		       <p>After you make changes, you can verify that the updates are complete by checking the status of your
 * 			accelerator: the status changes from IN_PROGRESS to DEPLOYED.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, AllowCustomRoutingTrafficCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, AllowCustomRoutingTrafficCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new AllowCustomRoutingTrafficCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AllowCustomRoutingTrafficCommandInput} for command's `input` shape.
 * @see {@link AllowCustomRoutingTrafficCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AllowCustomRoutingTrafficCommand extends $Command<AllowCustomRoutingTrafficCommandInput, AllowCustomRoutingTrafficCommandOutput, GlobalAcceleratorClientResolvedConfig> {
    readonly input: AllowCustomRoutingTrafficCommandInput;
    constructor(input: AllowCustomRoutingTrafficCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlobalAcceleratorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AllowCustomRoutingTrafficCommandInput, AllowCustomRoutingTrafficCommandOutput>;
    private serialize;
    private deserialize;
}
