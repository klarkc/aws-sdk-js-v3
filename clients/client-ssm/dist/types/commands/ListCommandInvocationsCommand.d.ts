import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { ListCommandInvocationsRequest, ListCommandInvocationsResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListCommandInvocationsCommandInput extends ListCommandInvocationsRequest {
}
export interface ListCommandInvocationsCommandOutput extends ListCommandInvocationsResult, __MetadataBearer {
}
/**
 * <p>An invocation is copy of a command sent to a specific instance. A command can apply to one
 *    or more instances. A command invocation applies to one instance. For example, if a user runs
 *    SendCommand against three instances, then a command invocation is created for each requested
 *    instance ID. ListCommandInvocations provide status about command execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListCommandInvocationsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListCommandInvocationsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new ListCommandInvocationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCommandInvocationsCommandInput} for command's `input` shape.
 * @see {@link ListCommandInvocationsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListCommandInvocationsCommand extends $Command<ListCommandInvocationsCommandInput, ListCommandInvocationsCommandOutput, SSMClientResolvedConfig> {
    readonly input: ListCommandInvocationsCommandInput;
    constructor(input: ListCommandInvocationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListCommandInvocationsCommandInput, ListCommandInvocationsCommandOutput>;
    private serialize;
    private deserialize;
}
