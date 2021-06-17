import { __extends } from "tslib";
import { CompleteAttachmentUploadRequest, CompleteAttachmentUploadResponse } from "../models/models_0";
import { deserializeAws_restJson1CompleteAttachmentUploadCommand, serializeAws_restJson1CompleteAttachmentUploadCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Allows you to confirm that the attachment has been uploaded using the pre-signed URL
 *             provided in StartAttachmentUpload API. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectParticipantClient, CompleteAttachmentUploadCommand } from "@aws-sdk/client-connectparticipant"; // ES Modules import
 * // const { ConnectParticipantClient, CompleteAttachmentUploadCommand } = require("@aws-sdk/client-connectparticipant"); // CommonJS import
 * const client = new ConnectParticipantClient(config);
 * const command = new CompleteAttachmentUploadCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CompleteAttachmentUploadCommandInput} for command's `input` shape.
 * @see {@link CompleteAttachmentUploadCommandOutput} for command's `response` shape.
 * @see {@link ConnectParticipantClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CompleteAttachmentUploadCommand = /** @class */ (function (_super) {
    __extends(CompleteAttachmentUploadCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CompleteAttachmentUploadCommand(input) {
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
    CompleteAttachmentUploadCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectParticipantClient";
        var commandName = "CompleteAttachmentUploadCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CompleteAttachmentUploadRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CompleteAttachmentUploadResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CompleteAttachmentUploadCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CompleteAttachmentUploadCommand(input, context);
    };
    CompleteAttachmentUploadCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CompleteAttachmentUploadCommand(output, context);
    };
    return CompleteAttachmentUploadCommand;
}($Command));
export { CompleteAttachmentUploadCommand };
//# sourceMappingURL=CompleteAttachmentUploadCommand.js.map