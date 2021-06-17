import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeImportSnapshotTasksRequest, DescribeImportSnapshotTasksResult } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeImportSnapshotTasksCommandInput extends DescribeImportSnapshotTasksRequest {
}
export interface DescribeImportSnapshotTasksCommandOutput extends DescribeImportSnapshotTasksResult, __MetadataBearer {
}
/**
 * <p>Describes your import snapshot tasks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeImportSnapshotTasksCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeImportSnapshotTasksCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeImportSnapshotTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeImportSnapshotTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeImportSnapshotTasksCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeImportSnapshotTasksCommand extends $Command<DescribeImportSnapshotTasksCommandInput, DescribeImportSnapshotTasksCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeImportSnapshotTasksCommandInput;
    constructor(input: DescribeImportSnapshotTasksCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeImportSnapshotTasksCommandInput, DescribeImportSnapshotTasksCommandOutput>;
    private serialize;
    private deserialize;
}
