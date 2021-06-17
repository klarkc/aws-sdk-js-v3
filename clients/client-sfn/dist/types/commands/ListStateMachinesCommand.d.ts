import { SFNClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SFNClient";
import { ListStateMachinesInput, ListStateMachinesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListStateMachinesCommandInput extends ListStateMachinesInput {
}
export interface ListStateMachinesCommandOutput extends ListStateMachinesOutput, __MetadataBearer {
}
/**
 * <p>Lists the existing state machines.</p>
 *          <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
 *     Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
 *          <note>
 *             <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, ListStateMachinesCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, ListStateMachinesCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const command = new ListStateMachinesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStateMachinesCommandInput} for command's `input` shape.
 * @see {@link ListStateMachinesCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListStateMachinesCommand extends $Command<ListStateMachinesCommandInput, ListStateMachinesCommandOutput, SFNClientResolvedConfig> {
    readonly input: ListStateMachinesCommandInput;
    constructor(input: ListStateMachinesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SFNClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListStateMachinesCommandInput, ListStateMachinesCommandOutput>;
    private serialize;
    private deserialize;
}
