import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { StartMLEvaluationTaskRunRequest, StartMLEvaluationTaskRunResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartMLEvaluationTaskRunCommandInput extends StartMLEvaluationTaskRunRequest {
}
export interface StartMLEvaluationTaskRunCommandOutput extends StartMLEvaluationTaskRunResponse, __MetadataBearer {
}
/**
 * <p>Starts a task to estimate the quality of the transform. </p>
 *
 * 	        <p>When you provide label sets as examples of truth, AWS Glue machine learning uses some of
 *       those examples to learn from them. The rest of the labels are used as a test to estimate
 *       quality.</p>
 *
 * 	        <p>Returns a unique identifier for the run. You can call <code>GetMLTaskRun</code> to get more
 *       information about the stats of the <code>EvaluationTaskRun</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StartMLEvaluationTaskRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StartMLEvaluationTaskRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new StartMLEvaluationTaskRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartMLEvaluationTaskRunCommandInput} for command's `input` shape.
 * @see {@link StartMLEvaluationTaskRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartMLEvaluationTaskRunCommand extends $Command<StartMLEvaluationTaskRunCommandInput, StartMLEvaluationTaskRunCommandOutput, GlueClientResolvedConfig> {
    readonly input: StartMLEvaluationTaskRunCommandInput;
    constructor(input: StartMLEvaluationTaskRunCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartMLEvaluationTaskRunCommandInput, StartMLEvaluationTaskRunCommandOutput>;
    private serialize;
    private deserialize;
}
