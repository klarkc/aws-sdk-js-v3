import { __extends } from "tslib";
import { PutConfigurationSetDeliveryOptionsRequest, PutConfigurationSetDeliveryOptionsResponse, } from "../models/models_0";
import { deserializeAws_restJson1PutConfigurationSetDeliveryOptionsCommand, serializeAws_restJson1PutConfigurationSetDeliveryOptionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associate a configuration set with a dedicated IP pool. You can use dedicated IP pools
 *             to create groups of dedicated IP addresses for sending specific types of email.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, PutConfigurationSetDeliveryOptionsCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, PutConfigurationSetDeliveryOptionsCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const command = new PutConfigurationSetDeliveryOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutConfigurationSetDeliveryOptionsCommandInput} for command's `input` shape.
 * @see {@link PutConfigurationSetDeliveryOptionsCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutConfigurationSetDeliveryOptionsCommand = /** @class */ (function (_super) {
    __extends(PutConfigurationSetDeliveryOptionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutConfigurationSetDeliveryOptionsCommand(input) {
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
    PutConfigurationSetDeliveryOptionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointEmailClient";
        var commandName = "PutConfigurationSetDeliveryOptionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutConfigurationSetDeliveryOptionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutConfigurationSetDeliveryOptionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutConfigurationSetDeliveryOptionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutConfigurationSetDeliveryOptionsCommand(input, context);
    };
    PutConfigurationSetDeliveryOptionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutConfigurationSetDeliveryOptionsCommand(output, context);
    };
    return PutConfigurationSetDeliveryOptionsCommand;
}($Command));
export { PutConfigurationSetDeliveryOptionsCommand };
//# sourceMappingURL=PutConfigurationSetDeliveryOptionsCommand.js.map