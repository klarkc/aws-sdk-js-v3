import { __extends } from "tslib";
import { DisableAddOnRequest, DisableAddOnResult } from "../models/models_0";
import { deserializeAws_json1_1DisableAddOnCommand, serializeAws_json1_1DisableAddOnCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disables an add-on for an Amazon Lightsail resource. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DisableAddOnCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DisableAddOnCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DisableAddOnCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableAddOnCommandInput} for command's `input` shape.
 * @see {@link DisableAddOnCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisableAddOnCommand = /** @class */ (function (_super) {
    __extends(DisableAddOnCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisableAddOnCommand(input) {
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
    DisableAddOnCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "DisableAddOnCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisableAddOnRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisableAddOnResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisableAddOnCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DisableAddOnCommand(input, context);
    };
    DisableAddOnCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DisableAddOnCommand(output, context);
    };
    return DisableAddOnCommand;
}($Command));
export { DisableAddOnCommand };
//# sourceMappingURL=DisableAddOnCommand.js.map