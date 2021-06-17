import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { DescribeSchemasMessage, DescribeSchemasResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeSchemasCommandInput extends DescribeSchemasMessage {
}
export interface DescribeSchemasCommandOutput extends DescribeSchemasResponse, __MetadataBearer {
}
/**
 * <p>Returns information about the schema for the specified endpoint.</p>
 *
 *          <p></p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeSchemasCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeSchemasCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new DescribeSchemasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSchemasCommandInput} for command's `input` shape.
 * @see {@link DescribeSchemasCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeSchemasCommand extends $Command<DescribeSchemasCommandInput, DescribeSchemasCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: DescribeSchemasCommandInput;
    constructor(input: DescribeSchemasCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSchemasCommandInput, DescribeSchemasCommandOutput>;
    private serialize;
    private deserialize;
}
