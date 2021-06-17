import { GlobalAcceleratorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlobalAcceleratorClient";
import { CreateCustomRoutingEndpointGroupRequest, CreateCustomRoutingEndpointGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateCustomRoutingEndpointGroupCommandInput extends CreateCustomRoutingEndpointGroupRequest {
}
export interface CreateCustomRoutingEndpointGroupCommandOutput extends CreateCustomRoutingEndpointGroupResponse, __MetadataBearer {
}
/**
 * <p>Create an endpoint group for the specified listener for a custom routing accelerator.
 * 		An endpoint group is a collection of endpoints in one AWS
 * 		Region. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, CreateCustomRoutingEndpointGroupCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, CreateCustomRoutingEndpointGroupCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new CreateCustomRoutingEndpointGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCustomRoutingEndpointGroupCommandInput} for command's `input` shape.
 * @see {@link CreateCustomRoutingEndpointGroupCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateCustomRoutingEndpointGroupCommand extends $Command<CreateCustomRoutingEndpointGroupCommandInput, CreateCustomRoutingEndpointGroupCommandOutput, GlobalAcceleratorClientResolvedConfig> {
    readonly input: CreateCustomRoutingEndpointGroupCommandInput;
    constructor(input: CreateCustomRoutingEndpointGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlobalAcceleratorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCustomRoutingEndpointGroupCommandInput, CreateCustomRoutingEndpointGroupCommandOutput>;
    private serialize;
    private deserialize;
}
