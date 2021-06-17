import { __extends } from "tslib";
import { GetAttachmentRequest, GetAttachmentResponse } from "../models/models_0";
import { deserializeAws_restJson1GetAttachmentCommand, serializeAws_restJson1GetAttachmentCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides a pre-signed URL for download of a completed attachment. This is an
 *             asynchronous API for use with active contacts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectParticipantClient, GetAttachmentCommand } from "@aws-sdk/client-connectparticipant"; // ES Modules import
 * // const { ConnectParticipantClient, GetAttachmentCommand } = require("@aws-sdk/client-connectparticipant"); // CommonJS import
 * const client = new ConnectParticipantClient(config);
 * const command = new GetAttachmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAttachmentCommandInput} for command's `input` shape.
 * @see {@link GetAttachmentCommandOutput} for command's `response` shape.
 * @see {@link ConnectParticipantClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAttachmentCommand = /** @class */ (function (_super) {
    __extends(GetAttachmentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAttachmentCommand(input) {
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
    GetAttachmentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectParticipantClient";
        var commandName = "GetAttachmentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAttachmentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetAttachmentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAttachmentCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetAttachmentCommand(input, context);
    };
    GetAttachmentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetAttachmentCommand(output, context);
    };
    return GetAttachmentCommand;
}($Command));
export { GetAttachmentCommand };
//# sourceMappingURL=GetAttachmentCommand.js.map