import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { DeleteReportInput, DeleteReportOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteReportCommandInput extends DeleteReportInput {
}
export interface DeleteReportCommandOutput extends DeleteReportOutput, __MetadataBearer {
}
/**
 * <p>
 *       Deletes a report.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, DeleteReportCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, DeleteReportCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new DeleteReportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteReportCommandInput} for command's `input` shape.
 * @see {@link DeleteReportCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteReportCommand extends $Command<DeleteReportCommandInput, DeleteReportCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: DeleteReportCommandInput;
    constructor(input: DeleteReportCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteReportCommandInput, DeleteReportCommandOutput>;
    private serialize;
    private deserialize;
}
