import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { StartChangeRequestExecutionRequest, StartChangeRequestExecutionResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartChangeRequestExecutionCommandInput extends StartChangeRequestExecutionRequest {
}
export interface StartChangeRequestExecutionCommandOutput extends StartChangeRequestExecutionResult, __MetadataBearer {
}
/**
 * <p>Creates a change request for Change Manager. The runbooks (Automation documents) specified in the
 *    change request run only after all required approvals for the change request have been
 *    received.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, StartChangeRequestExecutionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, StartChangeRequestExecutionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new StartChangeRequestExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartChangeRequestExecutionCommandInput} for command's `input` shape.
 * @see {@link StartChangeRequestExecutionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartChangeRequestExecutionCommand extends $Command<StartChangeRequestExecutionCommandInput, StartChangeRequestExecutionCommandOutput, SSMClientResolvedConfig> {
    readonly input: StartChangeRequestExecutionCommandInput;
    constructor(input: StartChangeRequestExecutionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartChangeRequestExecutionCommandInput, StartChangeRequestExecutionCommandOutput>;
    private serialize;
    private deserialize;
}
