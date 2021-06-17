import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { AssociateDiscoveredResourceRequest, AssociateDiscoveredResourceResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateDiscoveredResourceCommandInput extends AssociateDiscoveredResourceRequest {
}
export interface AssociateDiscoveredResourceCommandOutput extends AssociateDiscoveredResourceResult, __MetadataBearer {
}
/**
 * <p>Associates a discovered resource ID from Application Discovery Service with a migration
 *          task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, AssociateDiscoveredResourceCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, AssociateDiscoveredResourceCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * const client = new MigrationHubClient(config);
 * const command = new AssociateDiscoveredResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateDiscoveredResourceCommandInput} for command's `input` shape.
 * @see {@link AssociateDiscoveredResourceCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateDiscoveredResourceCommand extends $Command<AssociateDiscoveredResourceCommandInput, AssociateDiscoveredResourceCommandOutput, MigrationHubClientResolvedConfig> {
    readonly input: AssociateDiscoveredResourceCommandInput;
    constructor(input: AssociateDiscoveredResourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MigrationHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateDiscoveredResourceCommandInput, AssociateDiscoveredResourceCommandOutput>;
    private serialize;
    private deserialize;
}
