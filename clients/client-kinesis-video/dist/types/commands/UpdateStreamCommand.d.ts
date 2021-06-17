import { KinesisVideoClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoClient";
import { UpdateStreamInput, UpdateStreamOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateStreamCommandInput extends UpdateStreamInput {
}
export interface UpdateStreamCommandOutput extends UpdateStreamOutput, __MetadataBearer {
}
/**
 * <p>Updates stream metadata, such as the device name and media type.</p>
 *         <p>You must provide the stream name or the Amazon Resource Name (ARN) of the
 *             stream.</p>
 *         <p>To make sure that you have the latest version of the stream before updating it, you
 *             can specify the stream version. Kinesis Video Streams assigns a version to each stream.
 *             When you update a stream, Kinesis Video Streams assigns a new version number. To get the
 *             latest stream version, use the <code>DescribeStream</code> API. </p>
 *         <p>
 *             <code>UpdateStream</code> is an asynchronous operation, and takes time to
 *             complete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, UpdateStreamCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, UpdateStreamCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const command = new UpdateStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateStreamCommandInput} for command's `input` shape.
 * @see {@link UpdateStreamCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateStreamCommand extends $Command<UpdateStreamCommandInput, UpdateStreamCommandOutput, KinesisVideoClientResolvedConfig> {
    readonly input: UpdateStreamCommandInput;
    constructor(input: UpdateStreamCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisVideoClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateStreamCommandInput, UpdateStreamCommandOutput>;
    private serialize;
    private deserialize;
}
