import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { CreateEndpointMessage, CreateEndpointResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateEndpointCommandInput extends CreateEndpointMessage {
}
export interface CreateEndpointCommandOutput extends CreateEndpointResponse, __MetadataBearer {
}
/**
 * <p>Creates an endpoint using the provided settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, CreateEndpointCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, CreateEndpointCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new CreateEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateEndpointCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateEndpointCommand extends $Command<CreateEndpointCommandInput, CreateEndpointCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: CreateEndpointCommandInput;
    constructor(input: CreateEndpointCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateEndpointCommandInput, CreateEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
