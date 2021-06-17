import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { ListReportGroupsInput, ListReportGroupsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListReportGroupsCommandInput extends ListReportGroupsInput {
}
export interface ListReportGroupsCommandOutput extends ListReportGroupsOutput, __MetadataBearer {
}
/**
 * <p>
 *       Gets a list ARNs for the report groups in the current AWS account.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, ListReportGroupsCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, ListReportGroupsCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new ListReportGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListReportGroupsCommandInput} for command's `input` shape.
 * @see {@link ListReportGroupsCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListReportGroupsCommand extends $Command<ListReportGroupsCommandInput, ListReportGroupsCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: ListReportGroupsCommandInput;
    constructor(input: ListReportGroupsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListReportGroupsCommandInput, ListReportGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
