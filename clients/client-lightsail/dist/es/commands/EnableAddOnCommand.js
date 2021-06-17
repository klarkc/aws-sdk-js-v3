import { __extends } from "tslib";
import { EnableAddOnRequest, EnableAddOnResult } from "../models/models_0";
import { deserializeAws_json1_1EnableAddOnCommand, serializeAws_json1_1EnableAddOnCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enables or modifies an add-on for an Amazon Lightsail resource. For more information, see
 *       the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, EnableAddOnCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, EnableAddOnCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new EnableAddOnCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableAddOnCommandInput} for command's `input` shape.
 * @see {@link EnableAddOnCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var EnableAddOnCommand = /** @class */ (function (_super) {
    __extends(EnableAddOnCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function EnableAddOnCommand(input) {
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
    EnableAddOnCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "EnableAddOnCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: EnableAddOnRequest.filterSensitiveLog,
            outputFilterSensitiveLog: EnableAddOnResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    EnableAddOnCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1EnableAddOnCommand(input, context);
    };
    EnableAddOnCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1EnableAddOnCommand(output, context);
    };
    return EnableAddOnCommand;
}($Command));
export { EnableAddOnCommand };
//# sourceMappingURL=EnableAddOnCommand.js.map