import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { StopPipelineExecutionInput, StopPipelineExecutionOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StopPipelineExecutionCommandInput extends StopPipelineExecutionInput {
}
export interface StopPipelineExecutionCommandOutput extends StopPipelineExecutionOutput, __MetadataBearer {
}
/**
 * <p>Stops the specified pipeline execution. You choose to either stop the pipeline
 *             execution by completing in-progress actions without starting subsequent actions, or by
 *             abandoning in-progress actions. While completing or abandoning in-progress actions, the
 *             pipeline execution is in a <code>Stopping</code> state. After all in-progress actions
 *             are completed or abandoned, the pipeline execution is in a <code>Stopped</code>
 *             state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, StopPipelineExecutionCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, StopPipelineExecutionCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new StopPipelineExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopPipelineExecutionCommandInput} for command's `input` shape.
 * @see {@link StopPipelineExecutionCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopPipelineExecutionCommand extends $Command<StopPipelineExecutionCommandInput, StopPipelineExecutionCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: StopPipelineExecutionCommandInput;
    constructor(input: StopPipelineExecutionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopPipelineExecutionCommandInput, StopPipelineExecutionCommandOutput>;
    private serialize;
    private deserialize;
}
