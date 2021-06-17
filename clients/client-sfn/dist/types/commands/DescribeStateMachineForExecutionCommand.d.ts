import { SFNClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SFNClient";
import { DescribeStateMachineForExecutionInput, DescribeStateMachineForExecutionOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeStateMachineForExecutionCommandInput extends DescribeStateMachineForExecutionInput {
}
export interface DescribeStateMachineForExecutionCommandOutput extends DescribeStateMachineForExecutionOutput, __MetadataBearer {
}
/**
 * <p>Describes the state machine associated with a specific execution.</p>
 *          <note>
 *             <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p>
 *          </note>
 *          <p>This API action is not supported by <code>EXPRESS</code> state machines.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, DescribeStateMachineForExecutionCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, DescribeStateMachineForExecutionCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const command = new DescribeStateMachineForExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStateMachineForExecutionCommandInput} for command's `input` shape.
 * @see {@link DescribeStateMachineForExecutionCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeStateMachineForExecutionCommand extends $Command<DescribeStateMachineForExecutionCommandInput, DescribeStateMachineForExecutionCommandOutput, SFNClientResolvedConfig> {
    readonly input: DescribeStateMachineForExecutionCommandInput;
    constructor(input: DescribeStateMachineForExecutionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SFNClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeStateMachineForExecutionCommandInput, DescribeStateMachineForExecutionCommandOutput>;
    private serialize;
    private deserialize;
}
