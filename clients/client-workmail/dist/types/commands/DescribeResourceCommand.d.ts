import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { DescribeResourceRequest, DescribeResourceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeResourceCommandInput extends DescribeResourceRequest {
}
export interface DescribeResourceCommandOutput extends DescribeResourceResponse, __MetadataBearer {
}
/**
 * <p>Returns the data available for the resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, DescribeResourceCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, DescribeResourceCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new DescribeResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeResourceCommandInput} for command's `input` shape.
 * @see {@link DescribeResourceCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeResourceCommand extends $Command<DescribeResourceCommandInput, DescribeResourceCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: DescribeResourceCommandInput;
    constructor(input: DescribeResourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeResourceCommandInput, DescribeResourceCommandOutput>;
    private serialize;
    private deserialize;
}
