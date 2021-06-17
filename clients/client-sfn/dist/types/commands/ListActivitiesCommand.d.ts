import { SFNClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SFNClient";
import { ListActivitiesInput, ListActivitiesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListActivitiesCommandInput extends ListActivitiesInput {
}
export interface ListActivitiesCommandOutput extends ListActivitiesOutput, __MetadataBearer {
}
/**
 * <p>Lists the existing activities.</p>
 *          <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
 *     Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p>
 *          <note>
 *             <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, ListActivitiesCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, ListActivitiesCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const command = new ListActivitiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListActivitiesCommandInput} for command's `input` shape.
 * @see {@link ListActivitiesCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListActivitiesCommand extends $Command<ListActivitiesCommandInput, ListActivitiesCommandOutput, SFNClientResolvedConfig> {
    readonly input: ListActivitiesCommandInput;
    constructor(input: ListActivitiesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SFNClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListActivitiesCommandInput, ListActivitiesCommandOutput>;
    private serialize;
    private deserialize;
}
