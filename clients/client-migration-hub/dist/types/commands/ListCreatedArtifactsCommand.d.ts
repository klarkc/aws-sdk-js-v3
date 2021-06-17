import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { ListCreatedArtifactsRequest, ListCreatedArtifactsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListCreatedArtifactsCommandInput extends ListCreatedArtifactsRequest {
}
export interface ListCreatedArtifactsCommandOutput extends ListCreatedArtifactsResult, __MetadataBearer {
}
/**
 * <p>Lists the created artifacts attached to a given migration task in an update stream. This
 *          API has the following traits:</p>
 *          <ul>
 *             <li>
 *                <p>Gets the list of the created artifacts while
 *                migration is taking place.</p>
 *             </li>
 *             <li>
 *                <p>Shows the artifacts created by the migration tool that was associated by the
 *                   <code>AssociateCreatedArtifact</code> API. </p>
 *             </li>
 *             <li>
 *                <p>Lists created artifacts in a paginated interface. </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, ListCreatedArtifactsCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, ListCreatedArtifactsCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * const client = new MigrationHubClient(config);
 * const command = new ListCreatedArtifactsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCreatedArtifactsCommandInput} for command's `input` shape.
 * @see {@link ListCreatedArtifactsCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListCreatedArtifactsCommand extends $Command<ListCreatedArtifactsCommandInput, ListCreatedArtifactsCommandOutput, MigrationHubClientResolvedConfig> {
    readonly input: ListCreatedArtifactsCommandInput;
    constructor(input: ListCreatedArtifactsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MigrationHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListCreatedArtifactsCommandInput, ListCreatedArtifactsCommandOutput>;
    private serialize;
    private deserialize;
}
