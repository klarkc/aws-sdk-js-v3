import { SageMakerA2IRuntimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerA2IRuntimeClient";
import { StartHumanLoopRequest, StartHumanLoopResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartHumanLoopCommandInput extends StartHumanLoopRequest {
}
export interface StartHumanLoopCommandOutput extends StartHumanLoopResponse, __MetadataBearer {
}
/**
 * <p>Starts a human loop, provided that at least one activation condition is met.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerA2IRuntimeClient, StartHumanLoopCommand } from "@aws-sdk/client-sagemaker-a2i-runtime"; // ES Modules import
 * // const { SageMakerA2IRuntimeClient, StartHumanLoopCommand } = require("@aws-sdk/client-sagemaker-a2i-runtime"); // CommonJS import
 * const client = new SageMakerA2IRuntimeClient(config);
 * const command = new StartHumanLoopCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartHumanLoopCommandInput} for command's `input` shape.
 * @see {@link StartHumanLoopCommandOutput} for command's `response` shape.
 * @see {@link SageMakerA2IRuntimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartHumanLoopCommand extends $Command<StartHumanLoopCommandInput, StartHumanLoopCommandOutput, SageMakerA2IRuntimeClientResolvedConfig> {
    readonly input: StartHumanLoopCommandInput;
    constructor(input: StartHumanLoopCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerA2IRuntimeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartHumanLoopCommandInput, StartHumanLoopCommandOutput>;
    private serialize;
    private deserialize;
}
