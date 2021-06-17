import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { DeleteDiskRequest, DeleteDiskResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteDiskCommandInput extends DeleteDiskRequest {
}
export interface DeleteDiskCommandOutput extends DeleteDiskResult, __MetadataBearer {
}
/**
 * <p>Deletes the specified block storage disk. The disk must be in the <code>available</code>
 *       state (not attached to a Lightsail instance).</p>
 *          <note>
 *             <p>The disk may remain in the <code>deleting</code> state for several minutes.</p>
 *          </note>
 *          <p>The <code>delete disk</code> operation supports tag-based access control via resource tags
 *       applied to the resource identified by <code>disk name</code>. For more information, see the
 *         <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DeleteDiskCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DeleteDiskCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DeleteDiskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDiskCommandInput} for command's `input` shape.
 * @see {@link DeleteDiskCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteDiskCommand extends $Command<DeleteDiskCommandInput, DeleteDiskCommandOutput, LightsailClientResolvedConfig> {
    readonly input: DeleteDiskCommandInput;
    constructor(input: DeleteDiskCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDiskCommandInput, DeleteDiskCommandOutput>;
    private serialize;
    private deserialize;
}
