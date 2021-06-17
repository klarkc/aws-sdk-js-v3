import { __extends } from "tslib";
import { GetTranscriptRequest, GetTranscriptResponse } from "../models/models_0";
import { deserializeAws_restJson1GetTranscriptCommand, serializeAws_restJson1GetTranscriptCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a transcript of the session, including details about any attachments. Note
 *             that ConnectionToken is used for invoking this API instead of ParticipantToken.</p>
 *         <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4
 *                 authentication</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectParticipantClient, GetTranscriptCommand } from "@aws-sdk/client-connectparticipant"; // ES Modules import
 * // const { ConnectParticipantClient, GetTranscriptCommand } = require("@aws-sdk/client-connectparticipant"); // CommonJS import
 * const client = new ConnectParticipantClient(config);
 * const command = new GetTranscriptCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTranscriptCommandInput} for command's `input` shape.
 * @see {@link GetTranscriptCommandOutput} for command's `response` shape.
 * @see {@link ConnectParticipantClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetTranscriptCommand = /** @class */ (function (_super) {
    __extends(GetTranscriptCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetTranscriptCommand(input) {
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
    GetTranscriptCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectParticipantClient";
        var commandName = "GetTranscriptCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetTranscriptRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetTranscriptResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetTranscriptCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetTranscriptCommand(input, context);
    };
    GetTranscriptCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetTranscriptCommand(output, context);
    };
    return GetTranscriptCommand;
}($Command));
export { GetTranscriptCommand };
//# sourceMappingURL=GetTranscriptCommand.js.map