import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { ListDiscoveredResourcesRequest, ListDiscoveredResourcesResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDiscoveredResourcesCommandInput extends ListDiscoveredResourcesRequest {
}
export interface ListDiscoveredResourcesCommandOutput extends ListDiscoveredResourcesResult, __MetadataBearer {
}
/**
 * <p>Lists discovered resources associated with the given <code>MigrationTask</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, ListDiscoveredResourcesCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, ListDiscoveredResourcesCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * const client = new MigrationHubClient(config);
 * const command = new ListDiscoveredResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDiscoveredResourcesCommandInput} for command's `input` shape.
 * @see {@link ListDiscoveredResourcesCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDiscoveredResourcesCommand extends $Command<ListDiscoveredResourcesCommandInput, ListDiscoveredResourcesCommandOutput, MigrationHubClientResolvedConfig> {
    readonly input: ListDiscoveredResourcesCommandInput;
    constructor(input: ListDiscoveredResourcesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MigrationHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDiscoveredResourcesCommandInput, ListDiscoveredResourcesCommandOutput>;
    private serialize;
    private deserialize;
}
