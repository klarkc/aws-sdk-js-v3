import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { DeleteProgressUpdateStreamRequest, DeleteProgressUpdateStreamResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteProgressUpdateStreamCommandInput extends DeleteProgressUpdateStreamRequest {
}
export interface DeleteProgressUpdateStreamCommandOutput extends DeleteProgressUpdateStreamResult, __MetadataBearer {
}
/**
 * <p>Deletes a progress update stream, including all of its tasks, which was previously
 *          created as an AWS resource used for access control. This API has the following
 *          traits:</p>
 *          <ul>
 *             <li>
 *                <p>The only parameter needed for <code>DeleteProgressUpdateStream</code> is the
 *                stream name (same as a <code>CreateProgressUpdateStream</code> call).</p>
 *             </li>
 *             <li>
 *                <p>The call will return, and a background process will asynchronously delete the
 *                stream and all of its resources (tasks, associated resources, resource attributes,
 *                created artifacts).</p>
 *             </li>
 *             <li>
 *                <p>If the stream takes time to be deleted, it might still show up on a
 *                   <code>ListProgressUpdateStreams</code> call.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CreateProgressUpdateStream</code>, <code>ImportMigrationTask</code>,
 *                   <code>NotifyMigrationTaskState</code>, and all Associate[*] APIs related to the
 *                tasks belonging to the stream will throw "InvalidInputException" if the stream of the
 *                same name is in the process of being deleted.</p>
 *             </li>
 *             <li>
 *                <p>Once the stream and all of its resources are deleted,
 *                   <code>CreateProgressUpdateStream</code> for a stream of the same name will
 *                succeed, and that stream will be an entirely new logical resource (without any
 *                resources associated with the old stream).</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, DeleteProgressUpdateStreamCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, DeleteProgressUpdateStreamCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * const client = new MigrationHubClient(config);
 * const command = new DeleteProgressUpdateStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteProgressUpdateStreamCommandInput} for command's `input` shape.
 * @see {@link DeleteProgressUpdateStreamCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteProgressUpdateStreamCommand extends $Command<DeleteProgressUpdateStreamCommandInput, DeleteProgressUpdateStreamCommandOutput, MigrationHubClientResolvedConfig> {
    readonly input: DeleteProgressUpdateStreamCommandInput;
    constructor(input: DeleteProgressUpdateStreamCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MigrationHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteProgressUpdateStreamCommandInput, DeleteProgressUpdateStreamCommandOutput>;
    private serialize;
    private deserialize;
}
