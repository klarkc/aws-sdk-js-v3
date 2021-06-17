import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { ListReportsForReportGroupInput, ListReportsForReportGroupOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListReportsForReportGroupCommandInput extends ListReportsForReportGroupInput {
}
export interface ListReportsForReportGroupCommandOutput extends ListReportsForReportGroupOutput, __MetadataBearer {
}
/**
 * <p>
 *       Returns a list of ARNs for the reports that belong to a <code>ReportGroup</code>.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, ListReportsForReportGroupCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, ListReportsForReportGroupCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new ListReportsForReportGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListReportsForReportGroupCommandInput} for command's `input` shape.
 * @see {@link ListReportsForReportGroupCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListReportsForReportGroupCommand extends $Command<ListReportsForReportGroupCommandInput, ListReportsForReportGroupCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: ListReportsForReportGroupCommandInput;
    constructor(input: ListReportsForReportGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListReportsForReportGroupCommandInput, ListReportsForReportGroupCommandOutput>;
    private serialize;
    private deserialize;
}
