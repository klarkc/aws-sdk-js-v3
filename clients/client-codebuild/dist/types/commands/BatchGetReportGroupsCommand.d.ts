import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { BatchGetReportGroupsInput, BatchGetReportGroupsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchGetReportGroupsCommandInput extends BatchGetReportGroupsInput {
}
export interface BatchGetReportGroupsCommandOutput extends BatchGetReportGroupsOutput, __MetadataBearer {
}
/**
 * <p>
 *       Returns an array of report groups.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, BatchGetReportGroupsCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, BatchGetReportGroupsCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new BatchGetReportGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetReportGroupsCommandInput} for command's `input` shape.
 * @see {@link BatchGetReportGroupsCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchGetReportGroupsCommand extends $Command<BatchGetReportGroupsCommandInput, BatchGetReportGroupsCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: BatchGetReportGroupsCommandInput;
    constructor(input: BatchGetReportGroupsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchGetReportGroupsCommandInput, BatchGetReportGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
