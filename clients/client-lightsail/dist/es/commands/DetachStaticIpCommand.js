import { __extends } from "tslib";
import { DetachStaticIpRequest, DetachStaticIpResult } from "../models/models_0";
import { deserializeAws_json1_1DetachStaticIpCommand, serializeAws_json1_1DetachStaticIpCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Detaches a static IP from the Amazon Lightsail instance to which it is attached.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DetachStaticIpCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DetachStaticIpCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DetachStaticIpCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachStaticIpCommandInput} for command's `input` shape.
 * @see {@link DetachStaticIpCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DetachStaticIpCommand = /** @class */ (function (_super) {
    __extends(DetachStaticIpCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DetachStaticIpCommand(input) {
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
    DetachStaticIpCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "DetachStaticIpCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DetachStaticIpRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DetachStaticIpResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DetachStaticIpCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DetachStaticIpCommand(input, context);
    };
    DetachStaticIpCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DetachStaticIpCommand(output, context);
    };
    return DetachStaticIpCommand;
}($Command));
export { DetachStaticIpCommand };
//# sourceMappingURL=DetachStaticIpCommand.js.map