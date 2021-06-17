import { __extends } from "tslib";
import { DisconnectParticipantRequest, DisconnectParticipantResponse } from "../models/models_0";
import { deserializeAws_restJson1DisconnectParticipantCommand, serializeAws_restJson1DisconnectParticipantCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disconnects a participant. Note that ConnectionToken is used for invoking this API
 *             instead of ParticipantToken.</p>
 *         <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4
 *                 authentication</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectParticipantClient, DisconnectParticipantCommand } from "@aws-sdk/client-connectparticipant"; // ES Modules import
 * // const { ConnectParticipantClient, DisconnectParticipantCommand } = require("@aws-sdk/client-connectparticipant"); // CommonJS import
 * const client = new ConnectParticipantClient(config);
 * const command = new DisconnectParticipantCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisconnectParticipantCommandInput} for command's `input` shape.
 * @see {@link DisconnectParticipantCommandOutput} for command's `response` shape.
 * @see {@link ConnectParticipantClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisconnectParticipantCommand = /** @class */ (function (_super) {
    __extends(DisconnectParticipantCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisconnectParticipantCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    DisconnectParticipantCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectParticipantClient";
        var commandName = "DisconnectParticipantCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisconnectParticipantRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisconnectParticipantResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisconnectParticipantCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DisconnectParticipantCommand(input, context);
    };
    DisconnectParticipantCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DisconnectParticipantCommand(output, context);
    };
    return DisconnectParticipantCommand;
}($Command));
export { DisconnectParticipantCommand };
//# sourceMappingURL=DisconnectParticipantCommand.js.map