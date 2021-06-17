import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";
import { ListLedgersRequest, ListLedgersResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListLedgersCommandInput extends ListLedgersRequest {
}
export interface ListLedgersCommandOutput extends ListLedgersResponse, __MetadataBearer {
}
/**
 * <p>Returns an array of ledger summaries that are associated with the current AWS account
 *          and Region.</p>
 *          <p>This action returns a maximum of 100 items and is paginated so that you can
 *          retrieve all the items by calling <code>ListLedgers</code> multiple times.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, ListLedgersCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, ListLedgersCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const command = new ListLedgersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLedgersCommandInput} for command's `input` shape.
 * @see {@link ListLedgersCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListLedgersCommand extends $Command<ListLedgersCommandInput, ListLedgersCommandOutput, QLDBClientResolvedConfig> {
    readonly input: ListLedgersCommandInput;
    constructor(input: ListLedgersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QLDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListLedgersCommandInput, ListLedgersCommandOutput>;
    private serialize;
    private deserialize;
}
