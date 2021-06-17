import { GlobalAcceleratorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlobalAcceleratorClient";
import { DescribeListenerRequest, DescribeListenerResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeListenerCommandInput extends DescribeListenerRequest {
}
export interface DescribeListenerCommandOutput extends DescribeListenerResponse, __MetadataBearer {
}
/**
 * <p>Describe a listener. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, DescribeListenerCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, DescribeListenerCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new DescribeListenerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeListenerCommandInput} for command's `input` shape.
 * @see {@link DescribeListenerCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeListenerCommand extends $Command<DescribeListenerCommandInput, DescribeListenerCommandOutput, GlobalAcceleratorClientResolvedConfig> {
    readonly input: DescribeListenerCommandInput;
    constructor(input: DescribeListenerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlobalAcceleratorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeListenerCommandInput, DescribeListenerCommandOutput>;
    private serialize;
    private deserialize;
}
