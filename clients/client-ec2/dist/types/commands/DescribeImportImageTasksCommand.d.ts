import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeImportImageTasksRequest, DescribeImportImageTasksResult } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeImportImageTasksCommandInput extends DescribeImportImageTasksRequest {
}
export interface DescribeImportImageTasksCommandOutput extends DescribeImportImageTasksResult, __MetadataBearer {
}
/**
 * <p>Displays details about an import virtual machine or import snapshot tasks that are already created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeImportImageTasksCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeImportImageTasksCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeImportImageTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeImportImageTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeImportImageTasksCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeImportImageTasksCommand extends $Command<DescribeImportImageTasksCommandInput, DescribeImportImageTasksCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeImportImageTasksCommandInput;
    constructor(input: DescribeImportImageTasksCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeImportImageTasksCommandInput, DescribeImportImageTasksCommandOutput>;
    private serialize;
    private deserialize;
}
