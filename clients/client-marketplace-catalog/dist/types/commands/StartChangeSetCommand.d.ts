import { MarketplaceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MarketplaceCatalogClient";
import { StartChangeSetRequest, StartChangeSetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartChangeSetCommandInput extends StartChangeSetRequest {
}
export interface StartChangeSetCommandOutput extends StartChangeSetResponse, __MetadataBearer {
}
/**
 * <p>This operation allows you to request changes for your entities. Within a single
 *             ChangeSet, you cannot start the same change type against the same entity multiple times.
 *             Additionally, when a ChangeSet is running, all the entities targeted by the different
 *             changes are locked until the ChangeSet has completed (either succeeded, cancelled, or failed). If
 *             you try to start a ChangeSet containing a change against an entity that is already
 *             locked, you will receive a <code>ResourceInUseException</code>.</p>
 *
 *         <p>For example, you cannot start the ChangeSet described in the <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_StartChangeSet.html#API_StartChangeSet_Examples">example</a> later in this topic, because it contains two changes to execute the same change
 *             type (<code>AddRevisions</code>) against the same entity
 *             (<code>entity-id@1)</code>.</p>
 *
 *         <p>For more information about working with change sets, see <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#working-with-change-sets">
 *             Working with change sets</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceCatalogClient, StartChangeSetCommand } from "@aws-sdk/client-marketplace-catalog"; // ES Modules import
 * // const { MarketplaceCatalogClient, StartChangeSetCommand } = require("@aws-sdk/client-marketplace-catalog"); // CommonJS import
 * const client = new MarketplaceCatalogClient(config);
 * const command = new StartChangeSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartChangeSetCommandInput} for command's `input` shape.
 * @see {@link StartChangeSetCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartChangeSetCommand extends $Command<StartChangeSetCommandInput, StartChangeSetCommandOutput, MarketplaceCatalogClientResolvedConfig> {
    readonly input: StartChangeSetCommandInput;
    constructor(input: StartChangeSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MarketplaceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartChangeSetCommandInput, StartChangeSetCommandOutput>;
    private serialize;
    private deserialize;
}
