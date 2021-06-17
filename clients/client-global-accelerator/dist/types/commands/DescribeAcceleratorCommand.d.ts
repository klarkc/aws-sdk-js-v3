import { GlobalAcceleratorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlobalAcceleratorClient";
import { DescribeAcceleratorRequest, DescribeAcceleratorResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeAcceleratorCommandInput extends DescribeAcceleratorRequest {
}
export interface DescribeAcceleratorCommandOutput extends DescribeAcceleratorResponse, __MetadataBearer {
}
/**
 * <p>Describe an accelerator. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, DescribeAcceleratorCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, DescribeAcceleratorCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new DescribeAcceleratorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAcceleratorCommandInput} for command's `input` shape.
 * @see {@link DescribeAcceleratorCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeAcceleratorCommand extends $Command<DescribeAcceleratorCommandInput, DescribeAcceleratorCommandOutput, GlobalAcceleratorClientResolvedConfig> {
    readonly input: DescribeAcceleratorCommandInput;
    constructor(input: DescribeAcceleratorCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlobalAcceleratorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAcceleratorCommandInput, DescribeAcceleratorCommandOutput>;
    private serialize;
    private deserialize;
}
