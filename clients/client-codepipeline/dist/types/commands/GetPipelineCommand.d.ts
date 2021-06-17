import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { GetPipelineInput, GetPipelineOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetPipelineCommandInput extends GetPipelineInput {
}
export interface GetPipelineCommandOutput extends GetPipelineOutput, __MetadataBearer {
}
/**
 * <p>Returns the metadata, structure, stages, and actions of a pipeline. Can be used to
 *             return the entire structure of a pipeline in JSON format, which can then be modified and
 *             used to update the pipeline structure with <a>UpdatePipeline</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, GetPipelineCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, GetPipelineCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new GetPipelineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPipelineCommandInput} for command's `input` shape.
 * @see {@link GetPipelineCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetPipelineCommand extends $Command<GetPipelineCommandInput, GetPipelineCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: GetPipelineCommandInput;
    constructor(input: GetPipelineCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPipelineCommandInput, GetPipelineCommandOutput>;
    private serialize;
    private deserialize;
}
