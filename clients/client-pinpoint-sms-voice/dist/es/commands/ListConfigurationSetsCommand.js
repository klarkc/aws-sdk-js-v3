import { __extends } from "tslib";
import { ListConfigurationSetsRequest, ListConfigurationSetsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListConfigurationSetsCommand, serializeAws_restJson1ListConfigurationSetsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * List all of the configuration sets associated with your Amazon Pinpoint account in the current region.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceClient, ListConfigurationSetsCommand } from "@aws-sdk/client-pinpoint-sms-voice"; // ES Modules import
 * // const { PinpointSMSVoiceClient, ListConfigurationSetsCommand } = require("@aws-sdk/client-pinpoint-sms-voice"); // CommonJS import
 * const client = new PinpointSMSVoiceClient(config);
 * const command = new ListConfigurationSetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListConfigurationSetsCommandInput} for command's `input` shape.
 * @see {@link ListConfigurationSetsCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListConfigurationSetsCommand = /** @class */ (function (_super) {
    __extends(ListConfigurationSetsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListConfigurationSetsCommand(input) {
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
    ListConfigurationSetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointSMSVoiceClient";
        var commandName = "ListConfigurationSetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListConfigurationSetsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListConfigurationSetsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListConfigurationSetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListConfigurationSetsCommand(input, context);
    };
    ListConfigurationSetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListConfigurationSetsCommand(output, context);
    };
    return ListConfigurationSetsCommand;
}($Command));
export { ListConfigurationSetsCommand };
//# sourceMappingURL=ListConfigurationSetsCommand.js.map