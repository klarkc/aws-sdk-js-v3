import { SFNClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SFNClient";
import { DescribeStateMachineInput, DescribeStateMachineOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeStateMachineCommandInput extends DescribeStateMachineInput {
}
export interface DescribeStateMachineCommandOutput extends DescribeStateMachineOutput, __MetadataBearer {
}
/**
 * <p>Describes a state machine.</p>
 *          <note>
 *             <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, DescribeStateMachineCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, DescribeStateMachineCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const command = new DescribeStateMachineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStateMachineCommandInput} for command's `input` shape.
 * @see {@link DescribeStateMachineCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeStateMachineCommand extends $Command<DescribeStateMachineCommandInput, DescribeStateMachineCommandOutput, SFNClientResolvedConfig> {
    readonly input: DescribeStateMachineCommandInput;
    constructor(input: DescribeStateMachineCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SFNClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeStateMachineCommandInput, DescribeStateMachineCommandOutput>;
    private serialize;
    private deserialize;
}
