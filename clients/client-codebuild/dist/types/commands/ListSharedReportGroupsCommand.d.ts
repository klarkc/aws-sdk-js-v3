import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { ListSharedReportGroupsInput, ListSharedReportGroupsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListSharedReportGroupsCommandInput extends ListSharedReportGroupsInput {
}
export interface ListSharedReportGroupsCommandOutput extends ListSharedReportGroupsOutput, __MetadataBearer {
}
/**
 * <p> Gets a list of report groups that are shared with other AWS accounts or users.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, ListSharedReportGroupsCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, ListSharedReportGroupsCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new ListSharedReportGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSharedReportGroupsCommandInput} for command's `input` shape.
 * @see {@link ListSharedReportGroupsCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListSharedReportGroupsCommand extends $Command<ListSharedReportGroupsCommandInput, ListSharedReportGroupsCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: ListSharedReportGroupsCommandInput;
    constructor(input: ListSharedReportGroupsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSharedReportGroupsCommandInput, ListSharedReportGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
