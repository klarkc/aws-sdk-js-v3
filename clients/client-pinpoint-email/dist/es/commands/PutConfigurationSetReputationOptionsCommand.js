import { __extends } from "tslib";
import { PutConfigurationSetReputationOptionsRequest, PutConfigurationSetReputationOptionsResponse, } from "../models/models_0";
import { deserializeAws_restJson1PutConfigurationSetReputationOptionsCommand, serializeAws_restJson1PutConfigurationSetReputationOptionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enable or disable collection of reputation metrics for emails that you send using a
 *             particular configuration set in a specific AWS Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, PutConfigurationSetReputationOptionsCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, PutConfigurationSetReputationOptionsCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const command = new PutConfigurationSetReputationOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutConfigurationSetReputationOptionsCommandInput} for command's `input` shape.
 * @see {@link PutConfigurationSetReputationOptionsCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutConfigurationSetReputationOptionsCommand = /** @class */ (function (_super) {
    __extends(PutConfigurationSetReputationOptionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutConfigurationSetReputationOptionsCommand(input) {
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
    PutConfigurationSetReputationOptionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointEmailClient";
        var commandName = "PutConfigurationSetReputationOptionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutConfigurationSetReputationOptionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutConfigurationSetReputationOptionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutConfigurationSetReputationOptionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutConfigurationSetReputationOptionsCommand(input, context);
    };
    PutConfigurationSetReputationOptionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutConfigurationSetReputationOptionsCommand(output, context);
    };
    return PutConfigurationSetReputationOptionsCommand;
}($Command));
export { PutConfigurationSetReputationOptionsCommand };
//# sourceMappingURL=PutConfigurationSetReputationOptionsCommand.js.map