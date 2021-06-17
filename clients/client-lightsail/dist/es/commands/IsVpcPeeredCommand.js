import { __extends } from "tslib";
import { IsVpcPeeredRequest, IsVpcPeeredResult } from "../models/models_1";
import { deserializeAws_json1_1IsVpcPeeredCommand, serializeAws_json1_1IsVpcPeeredCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a Boolean value indicating whether your Lightsail VPC is peered.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, IsVpcPeeredCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, IsVpcPeeredCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new IsVpcPeeredCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link IsVpcPeeredCommandInput} for command's `input` shape.
 * @see {@link IsVpcPeeredCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var IsVpcPeeredCommand = /** @class */ (function (_super) {
    __extends(IsVpcPeeredCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function IsVpcPeeredCommand(input) {
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
    IsVpcPeeredCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "IsVpcPeeredCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: IsVpcPeeredRequest.filterSensitiveLog,
            outputFilterSensitiveLog: IsVpcPeeredResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    IsVpcPeeredCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1IsVpcPeeredCommand(input, context);
    };
    IsVpcPeeredCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1IsVpcPeeredCommand(output, context);
    };
    return IsVpcPeeredCommand;
}($Command));
export { IsVpcPeeredCommand };
//# sourceMappingURL=IsVpcPeeredCommand.js.map