"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopContactRecordingCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Stops recording a call when a contact is being recorded. StopContactRecording is a one-time
 *    action. If you use StopContactRecording to stop recording an ongoing call, you can't use
 *    StartContactRecording to restart it. For scenarios where the recording has started and you want
 *    to suspend it for sensitive information (for example, to collect a credit card number), and then
 *    restart it, use SuspendContactRecording and ResumeContactRecording.</p>
 *
 *          <p>Only voice recordings are supported at this time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, StopContactRecordingCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, StopContactRecordingCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new StopContactRecordingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopContactRecordingCommandInput} for command's `input` shape.
 * @see {@link StopContactRecordingCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
class StopContactRecordingCommand extends smithy_client_1.Command {
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
        const clientName = "ConnectClient";
        const commandName = "StopContactRecordingCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.StopContactRecordingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.StopContactRecordingResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1StopContactRecordingCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1StopContactRecordingCommand(output, context);
    }
}
exports.StopContactRecordingCommand = StopContactRecordingCommand;
//# sourceMappingURL=StopContactRecordingCommand.js.map