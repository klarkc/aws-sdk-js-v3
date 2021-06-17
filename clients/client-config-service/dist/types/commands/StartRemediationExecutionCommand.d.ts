import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { StartRemediationExecutionRequest, StartRemediationExecutionResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartRemediationExecutionCommandInput extends StartRemediationExecutionRequest {
}
export interface StartRemediationExecutionCommandOutput extends StartRemediationExecutionResponse, __MetadataBearer {
}
/**
 * <p>Runs an on-demand remediation for the specified AWS Config rules against the last known remediation configuration. It runs an execution against the current state of your resources. Remediation execution is asynchronous.</p>
 * 			      <p>You can specify up to 100 resource keys per request. An existing StartRemediationExecution call for the specified resource keys must complete before you can call the API again.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, StartRemediationExecutionCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, StartRemediationExecutionCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new StartRemediationExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartRemediationExecutionCommandInput} for command's `input` shape.
 * @see {@link StartRemediationExecutionCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartRemediationExecutionCommand extends $Command<StartRemediationExecutionCommandInput, StartRemediationExecutionCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: StartRemediationExecutionCommandInput;
    constructor(input: StartRemediationExecutionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartRemediationExecutionCommandInput, StartRemediationExecutionCommandOutput>;
    private serialize;
    private deserialize;
}
