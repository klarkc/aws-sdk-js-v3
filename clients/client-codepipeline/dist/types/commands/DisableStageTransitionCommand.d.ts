import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { DisableStageTransitionInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisableStageTransitionCommandInput extends DisableStageTransitionInput {
}
export interface DisableStageTransitionCommandOutput extends __MetadataBearer {
}
/**
 * <p>Prevents artifacts in a pipeline from transitioning to the next stage in the
 *             pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, DisableStageTransitionCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, DisableStageTransitionCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new DisableStageTransitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableStageTransitionCommandInput} for command's `input` shape.
 * @see {@link DisableStageTransitionCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisableStageTransitionCommand extends $Command<DisableStageTransitionCommandInput, DisableStageTransitionCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: DisableStageTransitionCommandInput;
    constructor(input: DisableStageTransitionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableStageTransitionCommandInput, DisableStageTransitionCommandOutput>;
    private serialize;
    private deserialize;
}
