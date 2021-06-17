import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeExportImageTasksRequest, DescribeExportImageTasksResult } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeExportImageTasksCommandInput extends DescribeExportImageTasksRequest {
}
export interface DescribeExportImageTasksCommandOutput extends DescribeExportImageTasksResult, __MetadataBearer {
}
/**
 * <p>Describes the specified export image tasks or all of your export image tasks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeExportImageTasksCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeExportImageTasksCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeExportImageTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeExportImageTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeExportImageTasksCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeExportImageTasksCommand extends $Command<DescribeExportImageTasksCommandInput, DescribeExportImageTasksCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeExportImageTasksCommandInput;
    constructor(input: DescribeExportImageTasksCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeExportImageTasksCommandInput, DescribeExportImageTasksCommandOutput>;
    private serialize;
    private deserialize;
}
