import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { ListMigrationTasksRequest, ListMigrationTasksResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListMigrationTasksCommandInput extends ListMigrationTasksRequest {
}
export interface ListMigrationTasksCommandOutput extends ListMigrationTasksResult, __MetadataBearer {
}
/**
 * <p>Lists all, or filtered by resource name, migration tasks associated with the user
 *          account making this call. This API has the following traits:</p>
 *          <ul>
 *             <li>
 *                <p>Can show a summary list of the most recent migration tasks.</p>
 *             </li>
 *             <li>
 *                <p>Can show a summary list of migration tasks associated with a given discovered
 *                resource.</p>
 *             </li>
 *             <li>
 *                <p>Lists migration tasks in a paginated interface.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, ListMigrationTasksCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, ListMigrationTasksCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * const client = new MigrationHubClient(config);
 * const command = new ListMigrationTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMigrationTasksCommandInput} for command's `input` shape.
 * @see {@link ListMigrationTasksCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListMigrationTasksCommand extends $Command<ListMigrationTasksCommandInput, ListMigrationTasksCommandOutput, MigrationHubClientResolvedConfig> {
    readonly input: ListMigrationTasksCommandInput;
    constructor(input: ListMigrationTasksCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MigrationHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListMigrationTasksCommandInput, ListMigrationTasksCommandOutput>;
    private serialize;
    private deserialize;
}
