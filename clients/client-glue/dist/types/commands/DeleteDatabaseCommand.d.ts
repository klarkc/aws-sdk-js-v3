import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeleteDatabaseRequest, DeleteDatabaseResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteDatabaseCommandInput extends DeleteDatabaseRequest {
}
export interface DeleteDatabaseCommandOutput extends DeleteDatabaseResponse, __MetadataBearer {
}
/**
 * <p>Removes a specified database from a Data Catalog.</p>
 *          <note>
 *             <p>After completing this operation, you no longer have access to the tables (and all table
 *         versions and partitions that might belong to the tables) and the user-defined functions in
 *         the deleted database. AWS Glue deletes these "orphaned" resources asynchronously in a timely
 *         manner, at the discretion of the service.</p>
 *             <p>To ensure the immediate deletion of all related resources, before calling
 *           <code>DeleteDatabase</code>, use <code>DeleteTableVersion</code> or
 *           <code>BatchDeleteTableVersion</code>, <code>DeletePartition</code> or
 *           <code>BatchDeletePartition</code>, <code>DeleteUserDefinedFunction</code>, and
 *           <code>DeleteTable</code> or <code>BatchDeleteTable</code>, to delete any resources that
 *         belong to the database.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteDatabaseCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteDatabaseCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new DeleteDatabaseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDatabaseCommandInput} for command's `input` shape.
 * @see {@link DeleteDatabaseCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteDatabaseCommand extends $Command<DeleteDatabaseCommandInput, DeleteDatabaseCommandOutput, GlueClientResolvedConfig> {
    readonly input: DeleteDatabaseCommandInput;
    constructor(input: DeleteDatabaseCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDatabaseCommandInput, DeleteDatabaseCommandOutput>;
    private serialize;
    private deserialize;
}
