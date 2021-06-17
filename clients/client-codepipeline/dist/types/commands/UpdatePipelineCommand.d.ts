import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { UpdatePipelineInput, UpdatePipelineOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdatePipelineCommandInput extends UpdatePipelineInput {
}
export interface UpdatePipelineCommandOutput extends UpdatePipelineOutput, __MetadataBearer {
}
/**
 * <p>Updates a specified pipeline with edits or changes to its structure. Use a JSON
 *             file with the pipeline structure and <code>UpdatePipeline</code> to provide the full
 *             structure of the pipeline. Updating the pipeline increases the version number of the
 *             pipeline by 1.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, UpdatePipelineCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, UpdatePipelineCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new UpdatePipelineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePipelineCommandInput} for command's `input` shape.
 * @see {@link UpdatePipelineCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdatePipelineCommand extends $Command<UpdatePipelineCommandInput, UpdatePipelineCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: UpdatePipelineCommandInput;
    constructor(input: UpdatePipelineCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdatePipelineCommandInput, UpdatePipelineCommandOutput>;
    private serialize;
    private deserialize;
}
