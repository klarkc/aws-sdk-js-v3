import { __extends } from "tslib";
import { GetSubscriptionAttributesInput, GetSubscriptionAttributesResponse } from "../models/models_0";
import { deserializeAws_queryGetSubscriptionAttributesCommand, serializeAws_queryGetSubscriptionAttributesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns all of the properties of a subscription.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, GetSubscriptionAttributesCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, GetSubscriptionAttributesCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new GetSubscriptionAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSubscriptionAttributesCommandInput} for command's `input` shape.
 * @see {@link GetSubscriptionAttributesCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSubscriptionAttributesCommand = /** @class */ (function (_super) {
    __extends(GetSubscriptionAttributesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSubscriptionAttributesCommand(input) {
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
    GetSubscriptionAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SNSClient";
        var commandName = "GetSubscriptionAttributesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSubscriptionAttributesInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetSubscriptionAttributesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSubscriptionAttributesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryGetSubscriptionAttributesCommand(input, context);
    };
    GetSubscriptionAttributesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryGetSubscriptionAttributesCommand(output, context);
    };
    return GetSubscriptionAttributesCommand;
}($Command));
export { GetSubscriptionAttributesCommand };
//# sourceMappingURL=GetSubscriptionAttributesCommand.js.map