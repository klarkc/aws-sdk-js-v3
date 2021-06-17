import { ServiceInputTypes, ServiceOutputTypes, TimestreamWriteClientResolvedConfig } from "../TimestreamWriteClient";
import { DeleteDatabaseRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteDatabaseCommandInput extends DeleteDatabaseRequest {
}
export interface DeleteDatabaseCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a given Timestream database. <i>This is an irreversible operation.
 *       After a database is deleted, the time series data from its tables cannot be recovered.</i>
 *          </p>
 *
 *          <p>All tables in the database must be deleted first, or a ValidationException error will be thrown.
 *       </p>
 *
 *          <p>Due to the nature of distributed retries,
 *          the operation can return either success or a ResourceNotFoundException. Clients should consider them equivalent.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamWriteClient, DeleteDatabaseCommand } from "@aws-sdk/client-timestream-write"; // ES Modules import
 * // const { TimestreamWriteClient, DeleteDatabaseCommand } = require("@aws-sdk/client-timestream-write"); // CommonJS import
 * const client = new TimestreamWriteClient(config);
 * const command = new DeleteDatabaseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDatabaseCommandInput} for command's `input` shape.
 * @see {@link DeleteDatabaseCommandOutput} for command's `response` shape.
 * @see {@link TimestreamWriteClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteDatabaseCommand extends $Command<DeleteDatabaseCommandInput, DeleteDatabaseCommandOutput, TimestreamWriteClientResolvedConfig> {
    readonly input: DeleteDatabaseCommandInput;
    constructor(input: DeleteDatabaseCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TimestreamWriteClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDatabaseCommandInput, DeleteDatabaseCommandOutput>;
    private serialize;
    private deserialize;
}
