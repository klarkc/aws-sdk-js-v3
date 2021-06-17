import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { ModifyEndpointMessage, ModifyEndpointResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyEndpointCommandInput extends ModifyEndpointMessage {
}
export interface ModifyEndpointCommandOutput extends ModifyEndpointResponse, __MetadataBearer {
}
/**
 * <p>Modifies the specified endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, ModifyEndpointCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, ModifyEndpointCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new ModifyEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyEndpointCommandInput} for command's `input` shape.
 * @see {@link ModifyEndpointCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyEndpointCommand extends $Command<ModifyEndpointCommandInput, ModifyEndpointCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: ModifyEndpointCommandInput;
    constructor(input: ModifyEndpointCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyEndpointCommandInput, ModifyEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
