import { SFNClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SFNClient";
import { StartExecutionInput, StartExecutionOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartExecutionCommandInput extends StartExecutionInput {
}
export interface StartExecutionCommandOutput extends StartExecutionOutput, __MetadataBearer {
}
/**
 * <p>Starts a state machine execution.</p>
 *          <note>
 *             <p>
 *                <code>StartExecution</code> is idempotent. If <code>StartExecution</code> is called with
 *         the same name and input as a running execution, the call will succeed and return the same
 *         response as the original request. If the execution is closed or if the input is different,
 *         it will return a 400 <code>ExecutionAlreadyExists</code> error. Names can be reused after 90
 *         days. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, StartExecutionCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, StartExecutionCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const command = new StartExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartExecutionCommandInput} for command's `input` shape.
 * @see {@link StartExecutionCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartExecutionCommand extends $Command<StartExecutionCommandInput, StartExecutionCommandOutput, SFNClientResolvedConfig> {
    readonly input: StartExecutionCommandInput;
    constructor(input: StartExecutionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SFNClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartExecutionCommandInput, StartExecutionCommandOutput>;
    private serialize;
    private deserialize;
}
