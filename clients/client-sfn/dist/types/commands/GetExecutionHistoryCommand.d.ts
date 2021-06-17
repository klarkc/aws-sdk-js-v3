import { SFNClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SFNClient";
import { GetExecutionHistoryInput, GetExecutionHistoryOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetExecutionHistoryCommandInput extends GetExecutionHistoryInput {
}
export interface GetExecutionHistoryCommandOutput extends GetExecutionHistoryOutput, __MetadataBearer {
}
/**
 * <p>Returns the history of the specified execution as a list of events. By default, the
 *       results are returned in ascending order of the <code>timeStamp</code> of the events. Use the
 *         <code>reverseOrder</code> parameter to get the latest events first.</p>
 *          <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
 *     Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
 *          <p>This API action is not supported by <code>EXPRESS</code> state machines.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, GetExecutionHistoryCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, GetExecutionHistoryCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const command = new GetExecutionHistoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetExecutionHistoryCommandInput} for command's `input` shape.
 * @see {@link GetExecutionHistoryCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetExecutionHistoryCommand extends $Command<GetExecutionHistoryCommandInput, GetExecutionHistoryCommandOutput, SFNClientResolvedConfig> {
    readonly input: GetExecutionHistoryCommandInput;
    constructor(input: GetExecutionHistoryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SFNClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetExecutionHistoryCommandInput, GetExecutionHistoryCommandOutput>;
    private serialize;
    private deserialize;
}
