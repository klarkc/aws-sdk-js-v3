import { ServiceInputTypes, ServiceOutputTypes, TimestreamWriteClientResolvedConfig } from "../TimestreamWriteClient";
import { ListTablesRequest, ListTablesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListTablesCommandInput extends ListTablesRequest {
}
export interface ListTablesCommandOutput extends ListTablesResponse, __MetadataBearer {
}
/**
 * <p>A list of tables, along with the name, status and retention properties of each table.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamWriteClient, ListTablesCommand } from "@aws-sdk/client-timestream-write"; // ES Modules import
 * // const { TimestreamWriteClient, ListTablesCommand } = require("@aws-sdk/client-timestream-write"); // CommonJS import
 * const client = new TimestreamWriteClient(config);
 * const command = new ListTablesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTablesCommandInput} for command's `input` shape.
 * @see {@link ListTablesCommandOutput} for command's `response` shape.
 * @see {@link TimestreamWriteClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListTablesCommand extends $Command<ListTablesCommandInput, ListTablesCommandOutput, TimestreamWriteClientResolvedConfig> {
    readonly input: ListTablesCommandInput;
    constructor(input: ListTablesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TimestreamWriteClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTablesCommandInput, ListTablesCommandOutput>;
    private serialize;
    private deserialize;
}
