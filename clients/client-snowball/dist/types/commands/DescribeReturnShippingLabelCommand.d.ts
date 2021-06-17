import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";
import { DescribeReturnShippingLabelRequest, DescribeReturnShippingLabelResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeReturnShippingLabelCommandInput extends DescribeReturnShippingLabelRequest {
}
export interface DescribeReturnShippingLabelCommandOutput extends DescribeReturnShippingLabelResult, __MetadataBearer {
}
/**
 * <p>Information on the shipping label of a Snow device that is being returned to AWS.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, DescribeReturnShippingLabelCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, DescribeReturnShippingLabelCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new DescribeReturnShippingLabelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReturnShippingLabelCommandInput} for command's `input` shape.
 * @see {@link DescribeReturnShippingLabelCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeReturnShippingLabelCommand extends $Command<DescribeReturnShippingLabelCommandInput, DescribeReturnShippingLabelCommandOutput, SnowballClientResolvedConfig> {
    readonly input: DescribeReturnShippingLabelCommandInput;
    constructor(input: DescribeReturnShippingLabelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SnowballClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeReturnShippingLabelCommandInput, DescribeReturnShippingLabelCommandOutput>;
    private serialize;
    private deserialize;
}
