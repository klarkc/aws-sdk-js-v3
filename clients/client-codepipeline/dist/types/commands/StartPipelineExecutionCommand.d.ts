import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { StartPipelineExecutionInput, StartPipelineExecutionOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartPipelineExecutionCommandInput extends StartPipelineExecutionInput {
}
export interface StartPipelineExecutionCommandOutput extends StartPipelineExecutionOutput, __MetadataBearer {
}
/**
 * <p>Starts the specified pipeline. Specifically, it begins processing the latest commit
 *             to the source location specified as part of the pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, StartPipelineExecutionCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, StartPipelineExecutionCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new StartPipelineExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartPipelineExecutionCommandInput} for command's `input` shape.
 * @see {@link StartPipelineExecutionCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartPipelineExecutionCommand extends $Command<StartPipelineExecutionCommandInput, StartPipelineExecutionCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: StartPipelineExecutionCommandInput;
    constructor(input: StartPipelineExecutionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartPipelineExecutionCommandInput, StartPipelineExecutionCommandOutput>;
    private serialize;
    private deserialize;
}
