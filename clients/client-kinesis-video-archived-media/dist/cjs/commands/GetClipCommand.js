"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetClipCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Downloads an MP4 file (clip) containing the archived, on-demand media from the
 *             specified video stream over the specified time range. </p>
 *         <p>Both the StreamName and the StreamARN parameters are optional, but you must specify
 *             either the StreamName or the StreamARN when invoking this API operation. </p>
 *
 *         <p>As a prerequisite to using GetCLip API, you must obtain an endpoint using
 *                 <code>GetDataEndpoint</code>, specifying GET_CLIP for<code></code> the
 *                 <code>APIName</code> parameter. </p>
 *         <p>An Amazon Kinesis video stream has the following requirements for providing data
 *             through MP4:</p>
 *         <ul>
 *             <li>
 *                 <p>The media must contain h.264 or h.265 encoded video and, optionally, AAC or
 *                     G.711 encoded audio. Specifically, the codec ID of track 1 should be
 *                         <code>V_MPEG/ISO/AVC</code> (for h.264) or V_MPEGH/ISO/HEVC (for H.265).
 *                     Optionally, the codec ID of track 2 should be <code>A_AAC</code> (for AAC) or
 *                     A_MS/ACM (for G.711).</p>
 *             </li>
 *             <li>
 *                 <p>Data retention must be greater than 0.</p>
 *             </li>
 *             <li>
 *                 <p>The video track of each fragment must contain codec private data in the
 *                     Advanced Video Coding (AVC) for H.264 format and HEVC for H.265 format. For more
 *                     information, see <a href="https://www.iso.org/standard/55980.html">MPEG-4
 *                         specification ISO/IEC 14496-15</a>. For information about adapting
 *                     stream data to a given format, see <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/producer-reference-nal.html">NAL Adaptation Flags</a>.</p>
 *             </li>
 *             <li>
 *                 <p>The audio track (if present) of each fragment must contain codec private data
 *                     in the AAC format (<a href="https://www.iso.org/standard/43345.html">AAC
 *                         specification ISO/IEC 13818-7</a>) or the <a href="http://www-mmsp.ece.mcgill.ca/Documents/AudioFormats/WAVE/WAVE.html">MS
 *                         Wave format</a>.</p>
 *             </li>
 *          </ul>
 *
 *         <p>You can monitor the amount of outgoing data by monitoring the
 *                 <code>GetClip.OutgoingBytes</code> Amazon CloudWatch metric. For information about
 *             using CloudWatch to monitor Kinesis Video Streams, see <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/monitoring.html">Monitoring Kinesis Video Streams</a>. For pricing information, see <a href="https://aws.amazon.com/kinesis/video-streams/pricing/">Amazon Kinesis Video
 *                 Streams Pricing</a> and <a href="https://aws.amazon.com/pricing/">AWS
 *                 Pricing</a>. Charges for outgoing AWS data apply.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoArchivedMediaClient, GetClipCommand } from "@aws-sdk/client-kinesis-video-archived-media"; // ES Modules import
 * // const { KinesisVideoArchivedMediaClient, GetClipCommand } = require("@aws-sdk/client-kinesis-video-archived-media"); // CommonJS import
 * const client = new KinesisVideoArchivedMediaClient(config);
 * const command = new GetClipCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetClipCommandInput} for command's `input` shape.
 * @see {@link GetClipCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoArchivedMediaClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetClipCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "KinesisVideoArchivedMediaClient";
        const commandName = "GetClipCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetClipInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetClipOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1GetClipCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1GetClipCommand(output, context);
    }
}
exports.GetClipCommand = GetClipCommand;
//# sourceMappingURL=GetClipCommand.js.map