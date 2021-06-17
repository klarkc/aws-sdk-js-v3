import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { DeleteInstanceSnapshotRequest, DeleteInstanceSnapshotResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteInstanceSnapshotCommandInput extends DeleteInstanceSnapshotRequest {
}
export interface DeleteInstanceSnapshotCommandOutput extends DeleteInstanceSnapshotResult, __MetadataBearer {
}
/**
 * <p>Deletes a specific snapshot of a virtual private server (or
 *       <i>instance</i>).</p>
 *          <p>The <code>delete instance snapshot</code> operation supports tag-based access control via
 *       resource tags applied to the resource identified by <code>instance snapshot name</code>. For
 *       more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DeleteInstanceSnapshotCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DeleteInstanceSnapshotCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DeleteInstanceSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteInstanceSnapshotCommandInput} for command's `input` shape.
 * @see {@link DeleteInstanceSnapshotCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteInstanceSnapshotCommand extends $Command<DeleteInstanceSnapshotCommandInput, DeleteInstanceSnapshotCommandOutput, LightsailClientResolvedConfig> {
    readonly input: DeleteInstanceSnapshotCommandInput;
    constructor(input: DeleteInstanceSnapshotCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteInstanceSnapshotCommandInput, DeleteInstanceSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
