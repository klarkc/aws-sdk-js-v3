import { GlobalAcceleratorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlobalAcceleratorClient";
import { CreateCustomRoutingAcceleratorRequest, CreateCustomRoutingAcceleratorResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateCustomRoutingAcceleratorCommandInput extends CreateCustomRoutingAcceleratorRequest {
}
export interface CreateCustomRoutingAcceleratorCommandOutput extends CreateCustomRoutingAcceleratorResponse, __MetadataBearer {
}
/**
 * <p>Create a custom routing accelerator. A custom routing accelerator directs traffic to one of possibly thousands
 * 		of Amazon EC2 instance destinations running in a single or multiple virtual private clouds (VPC) subnet endpoints.</p>
 * 	        <p>Be aware that, by default, all destination EC2 instances in a VPC subnet endpoint cannot receive
 * 			traffic. To enable all destinations to receive traffic, or to specify individual port
 * 			mappings that can receive traffic, see the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_AllowCustomRoutingTraffic.html">
 * 				AllowCustomRoutingTraffic</a> operation.</p>
 * 	        <important>
 * 		          <p>Global Accelerator is a global service that supports endpoints in multiple AWS Regions but you must specify the
 * 			US West (Oregon) Region to create or update accelerators.</p>
 * 	        </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, CreateCustomRoutingAcceleratorCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, CreateCustomRoutingAcceleratorCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new CreateCustomRoutingAcceleratorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCustomRoutingAcceleratorCommandInput} for command's `input` shape.
 * @see {@link CreateCustomRoutingAcceleratorCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateCustomRoutingAcceleratorCommand extends $Command<CreateCustomRoutingAcceleratorCommandInput, CreateCustomRoutingAcceleratorCommandOutput, GlobalAcceleratorClientResolvedConfig> {
    readonly input: CreateCustomRoutingAcceleratorCommandInput;
    constructor(input: CreateCustomRoutingAcceleratorCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlobalAcceleratorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCustomRoutingAcceleratorCommandInput, CreateCustomRoutingAcceleratorCommandOutput>;
    private serialize;
    private deserialize;
}
