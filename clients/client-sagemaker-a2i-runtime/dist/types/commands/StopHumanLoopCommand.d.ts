import { SageMakerA2IRuntimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerA2IRuntimeClient";
import { StopHumanLoopRequest, StopHumanLoopResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StopHumanLoopCommandInput extends StopHumanLoopRequest {
}
export interface StopHumanLoopCommandOutput extends StopHumanLoopResponse, __MetadataBearer {
}
/**
 * <p>Stops the specified human loop.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerA2IRuntimeClient, StopHumanLoopCommand } from "@aws-sdk/client-sagemaker-a2i-runtime"; // ES Modules import
 * // const { SageMakerA2IRuntimeClient, StopHumanLoopCommand } = require("@aws-sdk/client-sagemaker-a2i-runtime"); // CommonJS import
 * const client = new SageMakerA2IRuntimeClient(config);
 * const command = new StopHumanLoopCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopHumanLoopCommandInput} for command's `input` shape.
 * @see {@link StopHumanLoopCommandOutput} for command's `response` shape.
 * @see {@link SageMakerA2IRuntimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopHumanLoopCommand extends $Command<StopHumanLoopCommandInput, StopHumanLoopCommandOutput, SageMakerA2IRuntimeClientResolvedConfig> {
    readonly input: StopHumanLoopCommandInput;
    constructor(input: StopHumanLoopCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerA2IRuntimeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopHumanLoopCommandInput, StopHumanLoopCommandOutput>;
    private serialize;
    private deserialize;
}
