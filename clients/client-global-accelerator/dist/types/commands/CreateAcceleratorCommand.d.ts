import { GlobalAcceleratorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlobalAcceleratorClient";
import { CreateAcceleratorRequest, CreateAcceleratorResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateAcceleratorCommandInput extends CreateAcceleratorRequest {
}
export interface CreateAcceleratorCommandOutput extends CreateAcceleratorResponse, __MetadataBearer {
}
/**
 * <p>Create an accelerator. An accelerator includes one or more listeners that process inbound connections and direct traffic
 * 			to one or more endpoint groups, each of which includes endpoints, such as Network Load Balancers. </p>
 * 		       <important>
 * 			         <p>Global Accelerator is a global service that supports endpoints in multiple AWS Regions but you must specify the
 * 				US West (Oregon) Region to create or update accelerators.</p>
 * 		       </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, CreateAcceleratorCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, CreateAcceleratorCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new CreateAcceleratorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAcceleratorCommandInput} for command's `input` shape.
 * @see {@link CreateAcceleratorCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateAcceleratorCommand extends $Command<CreateAcceleratorCommandInput, CreateAcceleratorCommandOutput, GlobalAcceleratorClientResolvedConfig> {
    readonly input: CreateAcceleratorCommandInput;
    constructor(input: CreateAcceleratorCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlobalAcceleratorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateAcceleratorCommandInput, CreateAcceleratorCommandOutput>;
    private serialize;
    private deserialize;
}
