import { __extends } from "tslib";
import { StartAttachmentUploadRequest, StartAttachmentUploadResponse } from "../models/models_0";
import { deserializeAws_restJson1StartAttachmentUploadCommand, serializeAws_restJson1StartAttachmentUploadCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides a pre-signed Amazon S3 URL in response for uploading the file directly to
 *             S3.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectParticipantClient, StartAttachmentUploadCommand } from "@aws-sdk/client-connectparticipant"; // ES Modules import
 * // const { ConnectParticipantClient, StartAttachmentUploadCommand } = require("@aws-sdk/client-connectparticipant"); // CommonJS import
 * const client = new ConnectParticipantClient(config);
 * const command = new StartAttachmentUploadCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartAttachmentUploadCommandInput} for command's `input` shape.
 * @see {@link StartAttachmentUploadCommandOutput} for command's `response` shape.
 * @see {@link ConnectParticipantClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartAttachmentUploadCommand = /** @class */ (function (_super) {
    __extends(StartAttachmentUploadCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartAttachmentUploadCommand(input) {
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
    StartAttachmentUploadCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectParticipantClient";
        var commandName = "StartAttachmentUploadCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartAttachmentUploadRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartAttachmentUploadResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartAttachmentUploadCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StartAttachmentUploadCommand(input, context);
    };
    StartAttachmentUploadCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StartAttachmentUploadCommand(output, context);
    };
    return StartAttachmentUploadCommand;
}($Command));
export { StartAttachmentUploadCommand };
//# sourceMappingURL=StartAttachmentUploadCommand.js.map