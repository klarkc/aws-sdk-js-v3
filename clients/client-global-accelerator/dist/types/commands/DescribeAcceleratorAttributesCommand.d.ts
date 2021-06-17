import { GlobalAcceleratorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlobalAcceleratorClient";
import { DescribeAcceleratorAttributesRequest, DescribeAcceleratorAttributesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeAcceleratorAttributesCommandInput extends DescribeAcceleratorAttributesRequest {
}
export interface DescribeAcceleratorAttributesCommandOutput extends DescribeAcceleratorAttributesResponse, __MetadataBearer {
}
/**
 * <p>Describe the attributes of an accelerator.
 * 		</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, DescribeAcceleratorAttributesCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, DescribeAcceleratorAttributesCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new DescribeAcceleratorAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAcceleratorAttributesCommandInput} for command's `input` shape.
 * @see {@link DescribeAcceleratorAttributesCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeAcceleratorAttributesCommand extends $Command<DescribeAcceleratorAttributesCommandInput, DescribeAcceleratorAttributesCommandOutput, GlobalAcceleratorClientResolvedConfig> {
    readonly input: DescribeAcceleratorAttributesCommandInput;
    constructor(input: DescribeAcceleratorAttributesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlobalAcceleratorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAcceleratorAttributesCommandInput, DescribeAcceleratorAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
