import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { RefreshSchemasMessage, RefreshSchemasResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RefreshSchemasCommandInput extends RefreshSchemasMessage {
}
export interface RefreshSchemasCommandOutput extends RefreshSchemasResponse, __MetadataBearer {
}
/**
 * <p>Populates the schema for the specified endpoint. This is an asynchronous operation and
 *          can take several minutes. You can check the status of this operation by calling the
 *          DescribeRefreshSchemasStatus operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, RefreshSchemasCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, RefreshSchemasCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new RefreshSchemasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RefreshSchemasCommandInput} for command's `input` shape.
 * @see {@link RefreshSchemasCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RefreshSchemasCommand extends $Command<RefreshSchemasCommandInput, RefreshSchemasCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: RefreshSchemasCommandInput;
    constructor(input: RefreshSchemasCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RefreshSchemasCommandInput, RefreshSchemasCommandOutput>;
    private serialize;
    private deserialize;
}
