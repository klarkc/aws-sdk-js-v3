import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { CreatePipelineInput, CreatePipelineOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreatePipelineCommandInput extends CreatePipelineInput {
}
export interface CreatePipelineCommandOutput extends CreatePipelineOutput, __MetadataBearer {
}
/**
 * <p>Creates a pipeline.</p>
 *         <note>
 *             <p>In the pipeline structure, you must include either <code>artifactStore</code>
 *                 or <code>artifactStores</code> in your pipeline, but you cannot use both. If you
 *                 create a cross-region action in your pipeline, you must use
 *                     <code>artifactStores</code>.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, CreatePipelineCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, CreatePipelineCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new CreatePipelineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePipelineCommandInput} for command's `input` shape.
 * @see {@link CreatePipelineCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreatePipelineCommand extends $Command<CreatePipelineCommandInput, CreatePipelineCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: CreatePipelineCommandInput;
    constructor(input: CreatePipelineCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePipelineCommandInput, CreatePipelineCommandOutput>;
    private serialize;
    private deserialize;
}
