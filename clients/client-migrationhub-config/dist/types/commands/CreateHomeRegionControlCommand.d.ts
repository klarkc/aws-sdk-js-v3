import { MigrationHubConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubConfigClient";
import { CreateHomeRegionControlRequest, CreateHomeRegionControlResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateHomeRegionControlCommandInput extends CreateHomeRegionControlRequest {
}
export interface CreateHomeRegionControlCommandOutput extends CreateHomeRegionControlResult, __MetadataBearer {
}
/**
 * <p>This API sets up the home region for the calling account only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubConfigClient, CreateHomeRegionControlCommand } from "@aws-sdk/client-migrationhub-config"; // ES Modules import
 * // const { MigrationHubConfigClient, CreateHomeRegionControlCommand } = require("@aws-sdk/client-migrationhub-config"); // CommonJS import
 * const client = new MigrationHubConfigClient(config);
 * const command = new CreateHomeRegionControlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateHomeRegionControlCommandInput} for command's `input` shape.
 * @see {@link CreateHomeRegionControlCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubConfigClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateHomeRegionControlCommand extends $Command<CreateHomeRegionControlCommandInput, CreateHomeRegionControlCommandOutput, MigrationHubConfigClientResolvedConfig> {
    readonly input: CreateHomeRegionControlCommandInput;
    constructor(input: CreateHomeRegionControlCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MigrationHubConfigClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateHomeRegionControlCommandInput, CreateHomeRegionControlCommandOutput>;
    private serialize;
    private deserialize;
}
