import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeCoipPoolsRequest, DescribeCoipPoolsResult } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeCoipPoolsCommandInput extends DescribeCoipPoolsRequest {
}
export interface DescribeCoipPoolsCommandOutput extends DescribeCoipPoolsResult, __MetadataBearer {
}
/**
 * <p>Describes the specified customer-owned address pools or all of your customer-owned address pools.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeCoipPoolsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeCoipPoolsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeCoipPoolsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCoipPoolsCommandInput} for command's `input` shape.
 * @see {@link DescribeCoipPoolsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeCoipPoolsCommand extends $Command<DescribeCoipPoolsCommandInput, DescribeCoipPoolsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeCoipPoolsCommandInput;
    constructor(input: DescribeCoipPoolsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCoipPoolsCommandInput, DescribeCoipPoolsCommandOutput>;
    private serialize;
    private deserialize;
}
