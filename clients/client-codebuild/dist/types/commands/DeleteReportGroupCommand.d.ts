import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { DeleteReportGroupInput, DeleteReportGroupOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteReportGroupCommandInput extends DeleteReportGroupInput {
}
export interface DeleteReportGroupCommandOutput extends DeleteReportGroupOutput, __MetadataBearer {
}
/**
 * <p>Deletes a report group. Before you delete a report group, you must delete its reports. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, DeleteReportGroupCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, DeleteReportGroupCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new DeleteReportGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteReportGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteReportGroupCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteReportGroupCommand extends $Command<DeleteReportGroupCommandInput, DeleteReportGroupCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: DeleteReportGroupCommandInput;
    constructor(input: DeleteReportGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteReportGroupCommandInput, DeleteReportGroupCommandOutput>;
    private serialize;
    private deserialize;
}
