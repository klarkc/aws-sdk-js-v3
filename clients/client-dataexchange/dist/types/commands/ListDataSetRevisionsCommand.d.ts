import { DataExchangeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataExchangeClient";
import { ListDataSetRevisionsRequest, ListDataSetRevisionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDataSetRevisionsCommandInput extends ListDataSetRevisionsRequest {
}
export interface ListDataSetRevisionsCommandOutput extends ListDataSetRevisionsResponse, __MetadataBearer {
}
/**
 * <p>This operation lists a data set's revisions sorted by CreatedAt in descending order.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, ListDataSetRevisionsCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, ListDataSetRevisionsCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * const client = new DataExchangeClient(config);
 * const command = new ListDataSetRevisionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDataSetRevisionsCommandInput} for command's `input` shape.
 * @see {@link ListDataSetRevisionsCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDataSetRevisionsCommand extends $Command<ListDataSetRevisionsCommandInput, ListDataSetRevisionsCommandOutput, DataExchangeClientResolvedConfig> {
    readonly input: ListDataSetRevisionsCommandInput;
    constructor(input: ListDataSetRevisionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataExchangeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDataSetRevisionsCommandInput, ListDataSetRevisionsCommandOutput>;
    private serialize;
    private deserialize;
}
