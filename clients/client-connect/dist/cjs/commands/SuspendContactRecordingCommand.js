"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuspendContactRecordingCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>When a contact is being recorded, this API suspends recording the call. For example, you
 *    might suspend the call recording while collecting sensitive information, such as a credit card
 *    number. Then use ResumeContactRecording to restart recording. </p>
 *          <p>The period of time that the recording is suspended is filled with silence in the final
 *    recording. </p>
 *          <p>Only voice recordings are supported at this time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, SuspendContactRecordingCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, SuspendContactRecordingCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new SuspendContactRecordingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SuspendContactRecordingCommandInput} for command's `input` shape.
 * @see {@link SuspendContactRecordingCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
class SuspendContactRecordingCommand extends smithy_client_1.Command {
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
        const commandName = "SuspendContactRecordingCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.SuspendContactRecordingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.SuspendContactRecordingResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1SuspendContactRecordingCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1SuspendContactRecordingCommand(output, context);
    }
}
exports.SuspendContactRecordingCommand = SuspendContactRecordingCommand;
//# sourceMappingURL=SuspendContactRecordingCommand.js.map