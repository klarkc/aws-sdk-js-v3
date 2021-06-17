import { __extends } from "tslib";
import { DeleteChannelPolicyRequest, DeleteChannelPolicyResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteChannelPolicyCommand, serializeAws_restJson1DeleteChannelPolicyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a channel's IAM policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, DeleteChannelPolicyCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, DeleteChannelPolicyCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new DeleteChannelPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteChannelPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteChannelPolicyCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteChannelPolicyCommand = /** @class */ (function (_super) {
    __extends(DeleteChannelPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteChannelPolicyCommand(input) {
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
    DeleteChannelPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaTailorClient";
        var commandName = "DeleteChannelPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteChannelPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteChannelPolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteChannelPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteChannelPolicyCommand(input, context);
    };
    DeleteChannelPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteChannelPolicyCommand(output, context);
    };
    return DeleteChannelPolicyCommand;
}($Command));
export { DeleteChannelPolicyCommand };
//# sourceMappingURL=DeleteChannelPolicyCommand.js.map