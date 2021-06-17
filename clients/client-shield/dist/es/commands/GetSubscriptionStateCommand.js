import { __extends } from "tslib";
import { GetSubscriptionStateRequest, GetSubscriptionStateResponse } from "../models/models_0";
import { deserializeAws_json1_1GetSubscriptionStateCommand, serializeAws_json1_1GetSubscriptionStateCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the <code>SubscriptionState</code>, either <code>Active</code> or <code>Inactive</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, GetSubscriptionStateCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, GetSubscriptionStateCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new GetSubscriptionStateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSubscriptionStateCommandInput} for command's `input` shape.
 * @see {@link GetSubscriptionStateCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSubscriptionStateCommand = /** @class */ (function (_super) {
    __extends(GetSubscriptionStateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSubscriptionStateCommand(input) {
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
    GetSubscriptionStateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ShieldClient";
        var commandName = "GetSubscriptionStateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSubscriptionStateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetSubscriptionStateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSubscriptionStateCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetSubscriptionStateCommand(input, context);
    };
    GetSubscriptionStateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetSubscriptionStateCommand(output, context);
    };
    return GetSubscriptionStateCommand;
}($Command));
export { GetSubscriptionStateCommand };
//# sourceMappingURL=GetSubscriptionStateCommand.js.map