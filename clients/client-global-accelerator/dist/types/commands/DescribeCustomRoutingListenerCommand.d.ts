import { GlobalAcceleratorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlobalAcceleratorClient";
import { DescribeCustomRoutingListenerRequest, DescribeCustomRoutingListenerResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeCustomRoutingListenerCommandInput extends DescribeCustomRoutingListenerRequest {
}
export interface DescribeCustomRoutingListenerCommandOutput extends DescribeCustomRoutingListenerResponse, __MetadataBearer {
}
/**
 * <p>The description of a listener for a custom routing accelerator.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, DescribeCustomRoutingListenerCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, DescribeCustomRoutingListenerCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new DescribeCustomRoutingListenerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCustomRoutingListenerCommandInput} for command's `input` shape.
 * @see {@link DescribeCustomRoutingListenerCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeCustomRoutingListenerCommand extends $Command<DescribeCustomRoutingListenerCommandInput, DescribeCustomRoutingListenerCommandOutput, GlobalAcceleratorClientResolvedConfig> {
    readonly input: DescribeCustomRoutingListenerCommandInput;
    constructor(input: DescribeCustomRoutingListenerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlobalAcceleratorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCustomRoutingListenerCommandInput, DescribeCustomRoutingListenerCommandOutput>;
    private serialize;
    private deserialize;
}
