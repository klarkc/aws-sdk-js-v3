import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { StartAutomationExecutionRequest, StartAutomationExecutionResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartAutomationExecutionCommandInput extends StartAutomationExecutionRequest {
}
export interface StartAutomationExecutionCommandOutput extends StartAutomationExecutionResult, __MetadataBearer {
}
/**
 * <p>Initiates execution of an Automation document.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, StartAutomationExecutionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, StartAutomationExecutionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new StartAutomationExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartAutomationExecutionCommandInput} for command's `input` shape.
 * @see {@link StartAutomationExecutionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartAutomationExecutionCommand extends $Command<StartAutomationExecutionCommandInput, StartAutomationExecutionCommandOutput, SSMClientResolvedConfig> {
    readonly input: StartAutomationExecutionCommandInput;
    constructor(input: StartAutomationExecutionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartAutomationExecutionCommandInput, StartAutomationExecutionCommandOutput>;
    private serialize;
    private deserialize;
}
