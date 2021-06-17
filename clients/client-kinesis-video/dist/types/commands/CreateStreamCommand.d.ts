import { KinesisVideoClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoClient";
import { CreateStreamInput, CreateStreamOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateStreamCommandInput extends CreateStreamInput {
}
export interface CreateStreamCommandOutput extends CreateStreamOutput, __MetadataBearer {
}
/**
 * <p>Creates a new Kinesis video stream. </p>
 *
 *         <p>When you create a new stream, Kinesis Video Streams assigns it a version number.
 *             When you change the stream's metadata, Kinesis Video Streams updates the version. </p>
 *         <p>
 *             <code>CreateStream</code> is an asynchronous operation.</p>
 *         <p>For information about how the service works, see <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/how-it-works.html">How it Works</a>. </p>
 *         <p>You must have permissions for the <code>KinesisVideo:CreateStream</code>
 *             action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, CreateStreamCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, CreateStreamCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const command = new CreateStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateStreamCommandInput} for command's `input` shape.
 * @see {@link CreateStreamCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateStreamCommand extends $Command<CreateStreamCommandInput, CreateStreamCommandOutput, KinesisVideoClientResolvedConfig> {
    readonly input: CreateStreamCommandInput;
    constructor(input: CreateStreamCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisVideoClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateStreamCommandInput, CreateStreamCommandOutput>;
    private serialize;
    private deserialize;
}
