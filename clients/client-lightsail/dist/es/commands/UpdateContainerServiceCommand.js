import { __extends } from "tslib";
import { UpdateContainerServiceRequest, UpdateContainerServiceResult } from "../models/models_1";
import { deserializeAws_json1_1UpdateContainerServiceCommand, serializeAws_json1_1UpdateContainerServiceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the configuration of your Amazon Lightsail container service, such as its power,
 *       scale, and public domain names.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, UpdateContainerServiceCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, UpdateContainerServiceCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new UpdateContainerServiceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateContainerServiceCommandInput} for command's `input` shape.
 * @see {@link UpdateContainerServiceCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateContainerServiceCommand = /** @class */ (function (_super) {
    __extends(UpdateContainerServiceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateContainerServiceCommand(input) {
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
    UpdateContainerServiceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "UpdateContainerServiceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateContainerServiceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateContainerServiceResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateContainerServiceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateContainerServiceCommand(input, context);
    };
    UpdateContainerServiceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateContainerServiceCommand(output, context);
    };
    return UpdateContainerServiceCommand;
}($Command));
export { UpdateContainerServiceCommand };
//# sourceMappingURL=UpdateContainerServiceCommand.js.map