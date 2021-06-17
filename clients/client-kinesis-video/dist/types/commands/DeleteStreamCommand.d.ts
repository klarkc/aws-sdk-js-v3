import { KinesisVideoClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoClient";
import { DeleteStreamInput, DeleteStreamOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteStreamCommandInput extends DeleteStreamInput {
}
export interface DeleteStreamCommandOutput extends DeleteStreamOutput, __MetadataBearer {
}
/**
 * <p>Deletes a Kinesis video stream and the data contained in the stream. </p>
 *         <p>This method marks the stream for deletion, and makes the data in the stream
 *             inaccessible immediately.</p>
 *         <p> </p>
 *         <p> To ensure that you have the latest version of the stream before deleting it, you
 *             can specify the stream version. Kinesis Video Streams assigns a version to each stream.
 *             When you update a stream, Kinesis Video Streams assigns a new version number. To get the
 *             latest stream version, use the <code>DescribeStream</code> API. </p>
 *         <p>This operation requires permission for the <code>KinesisVideo:DeleteStream</code>
 *             action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, DeleteStreamCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, DeleteStreamCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const command = new DeleteStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteStreamCommandInput} for command's `input` shape.
 * @see {@link DeleteStreamCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteStreamCommand extends $Command<DeleteStreamCommandInput, DeleteStreamCommandOutput, KinesisVideoClientResolvedConfig> {
    readonly input: DeleteStreamCommandInput;
    constructor(input: DeleteStreamCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisVideoClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteStreamCommandInput, DeleteStreamCommandOutput>;
    private serialize;
    private deserialize;
}
