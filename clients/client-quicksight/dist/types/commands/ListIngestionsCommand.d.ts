import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { ListIngestionsRequest, ListIngestionsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListIngestionsCommandInput extends ListIngestionsRequest {
}
export interface ListIngestionsCommandOutput extends ListIngestionsResponse, __MetadataBearer {
}
/**
 * <p>Lists the history of SPICE ingestions for a dataset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListIngestionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListIngestionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new ListIngestionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListIngestionsCommandInput} for command's `input` shape.
 * @see {@link ListIngestionsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListIngestionsCommand extends $Command<ListIngestionsCommandInput, ListIngestionsCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: ListIngestionsCommandInput;
    constructor(input: ListIngestionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListIngestionsCommandInput, ListIngestionsCommandOutput>;
    private serialize;
    private deserialize;
}
