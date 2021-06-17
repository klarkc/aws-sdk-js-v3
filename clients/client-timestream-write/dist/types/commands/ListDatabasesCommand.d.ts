import { ServiceInputTypes, ServiceOutputTypes, TimestreamWriteClientResolvedConfig } from "../TimestreamWriteClient";
import { ListDatabasesRequest, ListDatabasesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDatabasesCommandInput extends ListDatabasesRequest {
}
export interface ListDatabasesCommandOutput extends ListDatabasesResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of your Timestream databases.
 *          Service quotas apply. For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Access Management</a> in the Timestream Developer Guide.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamWriteClient, ListDatabasesCommand } from "@aws-sdk/client-timestream-write"; // ES Modules import
 * // const { TimestreamWriteClient, ListDatabasesCommand } = require("@aws-sdk/client-timestream-write"); // CommonJS import
 * const client = new TimestreamWriteClient(config);
 * const command = new ListDatabasesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDatabasesCommandInput} for command's `input` shape.
 * @see {@link ListDatabasesCommandOutput} for command's `response` shape.
 * @see {@link TimestreamWriteClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDatabasesCommand extends $Command<ListDatabasesCommandInput, ListDatabasesCommandOutput, TimestreamWriteClientResolvedConfig> {
    readonly input: ListDatabasesCommandInput;
    constructor(input: ListDatabasesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TimestreamWriteClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDatabasesCommandInput, ListDatabasesCommandOutput>;
    private serialize;
    private deserialize;
}
