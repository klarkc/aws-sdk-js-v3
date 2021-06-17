import { GlobalAcceleratorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlobalAcceleratorClient";
import { DescribeCustomRoutingEndpointGroupRequest, DescribeCustomRoutingEndpointGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeCustomRoutingEndpointGroupCommandInput extends DescribeCustomRoutingEndpointGroupRequest {
}
export interface DescribeCustomRoutingEndpointGroupCommandOutput extends DescribeCustomRoutingEndpointGroupResponse, __MetadataBearer {
}
/**
 * <p>Describe an endpoint group for a custom routing accelerator. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, DescribeCustomRoutingEndpointGroupCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, DescribeCustomRoutingEndpointGroupCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new DescribeCustomRoutingEndpointGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCustomRoutingEndpointGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeCustomRoutingEndpointGroupCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeCustomRoutingEndpointGroupCommand extends $Command<DescribeCustomRoutingEndpointGroupCommandInput, DescribeCustomRoutingEndpointGroupCommandOutput, GlobalAcceleratorClientResolvedConfig> {
    readonly input: DescribeCustomRoutingEndpointGroupCommandInput;
    constructor(input: DescribeCustomRoutingEndpointGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlobalAcceleratorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCustomRoutingEndpointGroupCommandInput, DescribeCustomRoutingEndpointGroupCommandOutput>;
    private serialize;
    private deserialize;
}
