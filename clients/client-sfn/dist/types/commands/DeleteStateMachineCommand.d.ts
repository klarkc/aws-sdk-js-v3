import { SFNClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SFNClient";
import { DeleteStateMachineInput, DeleteStateMachineOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteStateMachineCommandInput extends DeleteStateMachineInput {
}
export interface DeleteStateMachineCommandOutput extends DeleteStateMachineOutput, __MetadataBearer {
}
/**
 * <p>Deletes a state machine. This is an asynchronous operation: It sets the state machine's
 *       status to <code>DELETING</code> and begins the deletion process. </p>
 *          <note>
 *             <p>For <code>EXPRESS</code>state machines, the deletion will happen eventually (usually
 *         less than a minute). Running executions may emit logs after <code>DeleteStateMachine</code>
 *         API is called.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, DeleteStateMachineCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, DeleteStateMachineCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const command = new DeleteStateMachineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteStateMachineCommandInput} for command's `input` shape.
 * @see {@link DeleteStateMachineCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteStateMachineCommand extends $Command<DeleteStateMachineCommandInput, DeleteStateMachineCommandOutput, SFNClientResolvedConfig> {
    readonly input: DeleteStateMachineCommandInput;
    constructor(input: DeleteStateMachineCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SFNClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteStateMachineCommandInput, DeleteStateMachineCommandOutput>;
    private serialize;
    private deserialize;
}
