import { KinesisVideoClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoClient";
import { UpdateDataRetentionInput, UpdateDataRetentionOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateDataRetentionCommandInput extends UpdateDataRetentionInput {
}
export interface UpdateDataRetentionCommandOutput extends UpdateDataRetentionOutput, __MetadataBearer {
}
/**
 * <p> Increases or decreases the stream's data retention period by the value that you
 *             specify. To indicate whether you want to increase or decrease the data retention period,
 *             specify the <code>Operation</code> parameter in the request body. In the request, you
 *             must specify either the <code>StreamName</code> or the <code>StreamARN</code>. </p>
 *         <note>
 *             <p>The retention period that you specify replaces the current value.</p>
 *         </note>
 *
 *         <p>This operation requires permission for the
 *                 <code>KinesisVideo:UpdateDataRetention</code> action.</p>
 *
 *         <p>Changing the data retention period affects the data in the stream as
 *             follows:</p>
 *         <ul>
 *             <li>
 *                 <p>If the data retention period is increased, existing data is retained for
 *                     the new retention period. For example, if the data retention period is increased
 *                     from one hour to seven hours, all existing data is retained for seven
 *                     hours.</p>
 *             </li>
 *             <li>
 *                 <p>If the data retention period is decreased, existing data is retained for
 *                     the new retention period. For example, if the data retention period is decreased
 *                     from seven hours to one hour, all existing data is retained for one hour, and
 *                     any data older than one hour is deleted immediately.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, UpdateDataRetentionCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, UpdateDataRetentionCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const command = new UpdateDataRetentionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDataRetentionCommandInput} for command's `input` shape.
 * @see {@link UpdateDataRetentionCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateDataRetentionCommand extends $Command<UpdateDataRetentionCommandInput, UpdateDataRetentionCommandOutput, KinesisVideoClientResolvedConfig> {
    readonly input: UpdateDataRetentionCommandInput;
    constructor(input: UpdateDataRetentionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisVideoClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDataRetentionCommandInput, UpdateDataRetentionCommandOutput>;
    private serialize;
    private deserialize;
}
