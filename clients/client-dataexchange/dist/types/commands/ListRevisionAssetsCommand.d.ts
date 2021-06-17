import { DataExchangeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataExchangeClient";
import { ListRevisionAssetsRequest, ListRevisionAssetsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListRevisionAssetsCommandInput extends ListRevisionAssetsRequest {
}
export interface ListRevisionAssetsCommandOutput extends ListRevisionAssetsResponse, __MetadataBearer {
}
/**
 * <p>This operation lists a revision's assets sorted alphabetically in descending order.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, ListRevisionAssetsCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, ListRevisionAssetsCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * const client = new DataExchangeClient(config);
 * const command = new ListRevisionAssetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRevisionAssetsCommandInput} for command's `input` shape.
 * @see {@link ListRevisionAssetsCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListRevisionAssetsCommand extends $Command<ListRevisionAssetsCommandInput, ListRevisionAssetsCommandOutput, DataExchangeClientResolvedConfig> {
    readonly input: ListRevisionAssetsCommandInput;
    constructor(input: ListRevisionAssetsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataExchangeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListRevisionAssetsCommandInput, ListRevisionAssetsCommandOutput>;
    private serialize;
    private deserialize;
}
