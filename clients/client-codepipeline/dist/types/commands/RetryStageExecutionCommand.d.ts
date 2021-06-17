import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { RetryStageExecutionInput, RetryStageExecutionOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RetryStageExecutionCommandInput extends RetryStageExecutionInput {
}
export interface RetryStageExecutionCommandOutput extends RetryStageExecutionOutput, __MetadataBearer {
}
/**
 * <p>Resumes the pipeline execution by retrying the last failed actions in a stage. You
 *             can retry a stage immediately if any of the actions in the stage fail. When you retry,
 *             all actions that are still in progress continue working, and failed actions are
 *             triggered again.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, RetryStageExecutionCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, RetryStageExecutionCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new RetryStageExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RetryStageExecutionCommandInput} for command's `input` shape.
 * @see {@link RetryStageExecutionCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RetryStageExecutionCommand extends $Command<RetryStageExecutionCommandInput, RetryStageExecutionCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: RetryStageExecutionCommandInput;
    constructor(input: RetryStageExecutionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RetryStageExecutionCommandInput, RetryStageExecutionCommandOutput>;
    private serialize;
    private deserialize;
}
