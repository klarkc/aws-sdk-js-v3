import { GlobalAcceleratorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlobalAcceleratorClient";
import { DenyCustomRoutingTrafficRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DenyCustomRoutingTrafficCommandInput extends DenyCustomRoutingTrafficRequest {
}
export interface DenyCustomRoutingTrafficCommandOutput extends __MetadataBearer {
}
/**
 * <p>Specify the Amazon EC2 instance (destination) IP addresses and ports for a VPC subnet endpoint that cannot receive traffic
 * 			for a custom routing accelerator. You can deny traffic to all destinations in the VPC endpoint, or deny traffic to a
 * 			specified list of destination IP addresses and ports. Note that you cannot specify IP addresses
 * 			or ports outside of the range that you configured for the endpoint group.</p>
 * 		       <p>After you make changes, you can verify that the updates are complete by checking the status of your
 * 			accelerator: the status changes from IN_PROGRESS to DEPLOYED.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, DenyCustomRoutingTrafficCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, DenyCustomRoutingTrafficCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new DenyCustomRoutingTrafficCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DenyCustomRoutingTrafficCommandInput} for command's `input` shape.
 * @see {@link DenyCustomRoutingTrafficCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DenyCustomRoutingTrafficCommand extends $Command<DenyCustomRoutingTrafficCommandInput, DenyCustomRoutingTrafficCommandOutput, GlobalAcceleratorClientResolvedConfig> {
    readonly input: DenyCustomRoutingTrafficCommandInput;
    constructor(input: DenyCustomRoutingTrafficCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlobalAcceleratorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DenyCustomRoutingTrafficCommandInput, DenyCustomRoutingTrafficCommandOutput>;
    private serialize;
    private deserialize;
}
