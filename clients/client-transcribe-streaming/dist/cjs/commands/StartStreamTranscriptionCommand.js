"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartStreamTranscriptionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_eventstream_1 = require("@aws-sdk/middleware-eventstream");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Starts a bidirectional HTTP2 stream where audio is streamed to Amazon Transcribe and the transcription
 *       results are streamed to your application.</p>
 *          <p>The following are encoded as HTTP2 headers:</p>
 *          <ul>
 *             <li>
 *                <p>x-amzn-transcribe-language-code</p>
 *             </li>
 *             <li>
 *                <p>x-amzn-transcribe-media-encoding</p>
 *             </li>
 *             <li>
 *                <p>x-amzn-transcribe-sample-rate</p>
 *             </li>
 *             <li>
 *                <p>x-amzn-transcribe-session-id</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeStreamingClient, StartStreamTranscriptionCommand } from "@aws-sdk/client-transcribe-streaming"; // ES Modules import
 * // const { TranscribeStreamingClient, StartStreamTranscriptionCommand } = require("@aws-sdk/client-transcribe-streaming"); // CommonJS import
 * const client = new TranscribeStreamingClient(config);
 * const command = new StartStreamTranscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartStreamTranscriptionCommandInput} for command's `input` shape.
 * @see {@link StartStreamTranscriptionCommandOutput} for command's `response` shape.
 * @see {@link TranscribeStreamingClientResolvedConfig | config} for command's `input` shape.
 *
 */
class StartStreamTranscriptionCommand extends smithy_client_1.Command {
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
        this.middlewareStack.use(middleware_eventstream_1.getEventStreamPlugin(configuration));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "TranscribeStreamingClient";
        const commandName = "StartStreamTranscriptionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.StartStreamTranscriptionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.StartStreamTranscriptionResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1StartStreamTranscriptionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1StartStreamTranscriptionCommand(output, context);
    }
}
exports.StartStreamTranscriptionCommand = StartStreamTranscriptionCommand;
//# sourceMappingURL=StartStreamTranscriptionCommand.js.map