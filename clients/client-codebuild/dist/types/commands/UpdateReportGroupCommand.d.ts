import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { UpdateReportGroupInput, UpdateReportGroupOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateReportGroupCommandInput extends UpdateReportGroupInput {
}
export interface UpdateReportGroupCommandOutput extends UpdateReportGroupOutput, __MetadataBearer {
}
/**
 * <p>
 *       Updates a report group.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, UpdateReportGroupCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, UpdateReportGroupCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new UpdateReportGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateReportGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateReportGroupCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateReportGroupCommand extends $Command<UpdateReportGroupCommandInput, UpdateReportGroupCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: UpdateReportGroupCommandInput;
    constructor(input: UpdateReportGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateReportGroupCommandInput, UpdateReportGroupCommandOutput>;
    private serialize;
    private deserialize;
}
