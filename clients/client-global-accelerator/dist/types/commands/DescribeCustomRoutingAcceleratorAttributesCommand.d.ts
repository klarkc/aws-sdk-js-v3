import { GlobalAcceleratorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlobalAcceleratorClient";
import { DescribeCustomRoutingAcceleratorAttributesRequest, DescribeCustomRoutingAcceleratorAttributesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeCustomRoutingAcceleratorAttributesCommandInput extends DescribeCustomRoutingAcceleratorAttributesRequest {
}
export interface DescribeCustomRoutingAcceleratorAttributesCommandOutput extends DescribeCustomRoutingAcceleratorAttributesResponse, __MetadataBearer {
}
/**
 * <p>Describe the attributes of a custom routing accelerator. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, DescribeCustomRoutingAcceleratorAttributesCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, DescribeCustomRoutingAcceleratorAttributesCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new DescribeCustomRoutingAcceleratorAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCustomRoutingAcceleratorAttributesCommandInput} for command's `input` shape.
 * @see {@link DescribeCustomRoutingAcceleratorAttributesCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeCustomRoutingAcceleratorAttributesCommand extends $Command<DescribeCustomRoutingAcceleratorAttributesCommandInput, DescribeCustomRoutingAcceleratorAttributesCommandOutput, GlobalAcceleratorClientResolvedConfig> {
    readonly input: DescribeCustomRoutingAcceleratorAttributesCommandInput;
    constructor(input: DescribeCustomRoutingAcceleratorAttributesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlobalAcceleratorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCustomRoutingAcceleratorAttributesCommandInput, DescribeCustomRoutingAcceleratorAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
