import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { StopAutomationExecutionRequest, StopAutomationExecutionResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StopAutomationExecutionCommandInput extends StopAutomationExecutionRequest {
}
export interface StopAutomationExecutionCommandOutput extends StopAutomationExecutionResult, __MetadataBearer {
}
/**
 * <p>Stop an Automation that is currently running.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, StopAutomationExecutionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, StopAutomationExecutionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new StopAutomationExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopAutomationExecutionCommandInput} for command's `input` shape.
 * @see {@link StopAutomationExecutionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopAutomationExecutionCommand extends $Command<StopAutomationExecutionCommandInput, StopAutomationExecutionCommandOutput, SSMClientResolvedConfig> {
    readonly input: StopAutomationExecutionCommandInput;
    constructor(input: StopAutomationExecutionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopAutomationExecutionCommandInput, StopAutomationExecutionCommandOutput>;
    private serialize;
    private deserialize;
}
