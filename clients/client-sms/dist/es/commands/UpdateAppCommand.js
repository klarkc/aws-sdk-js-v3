import { __extends } from "tslib";
import { UpdateAppRequest, UpdateAppResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateAppCommand, serializeAws_json1_1UpdateAppCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the specified application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, UpdateAppCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, UpdateAppCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new UpdateAppCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAppCommandInput} for command's `input` shape.
 * @see {@link UpdateAppCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateAppCommand = /** @class */ (function (_super) {
    __extends(UpdateAppCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateAppCommand(input) {
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
    UpdateAppCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SMSClient";
        var commandName = "UpdateAppCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateAppRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateAppResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateAppCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateAppCommand(input, context);
    };
    UpdateAppCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateAppCommand(output, context);
    };
    return UpdateAppCommand;
}($Command));
export { UpdateAppCommand };
//# sourceMappingURL=UpdateAppCommand.js.map