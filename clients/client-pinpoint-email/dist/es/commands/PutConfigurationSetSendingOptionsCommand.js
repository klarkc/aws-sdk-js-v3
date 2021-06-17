import { __extends } from "tslib";
import { PutConfigurationSetSendingOptionsRequest, PutConfigurationSetSendingOptionsResponse, } from "../models/models_0";
import { deserializeAws_restJson1PutConfigurationSetSendingOptionsCommand, serializeAws_restJson1PutConfigurationSetSendingOptionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enable or disable email sending for messages that use a particular configuration set
 *             in a specific AWS Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, PutConfigurationSetSendingOptionsCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, PutConfigurationSetSendingOptionsCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const command = new PutConfigurationSetSendingOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutConfigurationSetSendingOptionsCommandInput} for command's `input` shape.
 * @see {@link PutConfigurationSetSendingOptionsCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutConfigurationSetSendingOptionsCommand = /** @class */ (function (_super) {
    __extends(PutConfigurationSetSendingOptionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutConfigurationSetSendingOptionsCommand(input) {
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
    PutConfigurationSetSendingOptionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointEmailClient";
        var commandName = "PutConfigurationSetSendingOptionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutConfigurationSetSendingOptionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutConfigurationSetSendingOptionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutConfigurationSetSendingOptionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutConfigurationSetSendingOptionsCommand(input, context);
    };
    PutConfigurationSetSendingOptionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutConfigurationSetSendingOptionsCommand(output, context);
    };
    return PutConfigurationSetSendingOptionsCommand;
}($Command));
export { PutConfigurationSetSendingOptionsCommand };
//# sourceMappingURL=PutConfigurationSetSendingOptionsCommand.js.map