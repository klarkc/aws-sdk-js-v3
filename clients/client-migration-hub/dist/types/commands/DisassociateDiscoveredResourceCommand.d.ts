import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { DisassociateDiscoveredResourceRequest, DisassociateDiscoveredResourceResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateDiscoveredResourceCommandInput extends DisassociateDiscoveredResourceRequest {
}
export interface DisassociateDiscoveredResourceCommandOutput extends DisassociateDiscoveredResourceResult, __MetadataBearer {
}
/**
 * <p>Disassociate an Application Discovery Service discovered resource from a migration
 *          task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, DisassociateDiscoveredResourceCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, DisassociateDiscoveredResourceCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * const client = new MigrationHubClient(config);
 * const command = new DisassociateDiscoveredResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateDiscoveredResourceCommandInput} for command's `input` shape.
 * @see {@link DisassociateDiscoveredResourceCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateDiscoveredResourceCommand extends $Command<DisassociateDiscoveredResourceCommandInput, DisassociateDiscoveredResourceCommandOutput, MigrationHubClientResolvedConfig> {
    readonly input: DisassociateDiscoveredResourceCommandInput;
    constructor(input: DisassociateDiscoveredResourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MigrationHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateDiscoveredResourceCommandInput, DisassociateDiscoveredResourceCommandOutput>;
    private serialize;
    private deserialize;
}
