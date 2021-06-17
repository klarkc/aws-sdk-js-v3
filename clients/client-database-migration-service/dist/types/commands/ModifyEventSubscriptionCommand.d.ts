import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { ModifyEventSubscriptionMessage, ModifyEventSubscriptionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyEventSubscriptionCommandInput extends ModifyEventSubscriptionMessage {
}
export interface ModifyEventSubscriptionCommandOutput extends ModifyEventSubscriptionResponse, __MetadataBearer {
}
/**
 * <p>Modifies an existing AWS DMS event notification subscription. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, ModifyEventSubscriptionCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, ModifyEventSubscriptionCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new ModifyEventSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyEventSubscriptionCommandInput} for command's `input` shape.
 * @see {@link ModifyEventSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyEventSubscriptionCommand extends $Command<ModifyEventSubscriptionCommandInput, ModifyEventSubscriptionCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: ModifyEventSubscriptionCommandInput;
    constructor(input: ModifyEventSubscriptionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyEventSubscriptionCommandInput, ModifyEventSubscriptionCommandOutput>;
    private serialize;
    private deserialize;
}
