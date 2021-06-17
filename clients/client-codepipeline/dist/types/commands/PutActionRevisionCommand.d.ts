import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { PutActionRevisionInput, PutActionRevisionOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutActionRevisionCommandInput extends PutActionRevisionInput {
}
export interface PutActionRevisionCommandOutput extends PutActionRevisionOutput, __MetadataBearer {
}
/**
 * <p>Provides information to AWS CodePipeline about new revisions to a source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, PutActionRevisionCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, PutActionRevisionCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new PutActionRevisionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutActionRevisionCommandInput} for command's `input` shape.
 * @see {@link PutActionRevisionCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutActionRevisionCommand extends $Command<PutActionRevisionCommandInput, PutActionRevisionCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: PutActionRevisionCommandInput;
    constructor(input: PutActionRevisionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutActionRevisionCommandInput, PutActionRevisionCommandOutput>;
    private serialize;
    private deserialize;
}
