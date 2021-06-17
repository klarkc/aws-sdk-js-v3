import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { NotifyMigrationTaskStateRequest, NotifyMigrationTaskStateResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface NotifyMigrationTaskStateCommandInput extends NotifyMigrationTaskStateRequest {
}
export interface NotifyMigrationTaskStateCommandOutput extends NotifyMigrationTaskStateResult, __MetadataBearer {
}
/**
 * <p>Notifies Migration Hub of the current status, progress, or other detail regarding a
 *          migration task. This API has the following traits:</p>
 *          <ul>
 *             <li>
 *                <p>Migration tools will call the <code>NotifyMigrationTaskState</code> API to share
 *                the latest progress and status.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>MigrationTaskName</code> is used for addressing updates to the correct
 *                target.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ProgressUpdateStream</code> is used for access control and to provide a
 *                namespace for each migration tool.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, NotifyMigrationTaskStateCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, NotifyMigrationTaskStateCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * const client = new MigrationHubClient(config);
 * const command = new NotifyMigrationTaskStateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link NotifyMigrationTaskStateCommandInput} for command's `input` shape.
 * @see {@link NotifyMigrationTaskStateCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class NotifyMigrationTaskStateCommand extends $Command<NotifyMigrationTaskStateCommandInput, NotifyMigrationTaskStateCommandOutput, MigrationHubClientResolvedConfig> {
    readonly input: NotifyMigrationTaskStateCommandInput;
    constructor(input: NotifyMigrationTaskStateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MigrationHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<NotifyMigrationTaskStateCommandInput, NotifyMigrationTaskStateCommandOutput>;
    private serialize;
    private deserialize;
}
