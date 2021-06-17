import { __extends } from "tslib";
import { GetSubscriptionDefinitionRequest, GetSubscriptionDefinitionResponse } from "../models/models_0";
import { deserializeAws_restJson1GetSubscriptionDefinitionCommand, serializeAws_restJson1GetSubscriptionDefinitionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Retrieves information about a subscription definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetSubscriptionDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetSubscriptionDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new GetSubscriptionDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSubscriptionDefinitionCommandInput} for command's `input` shape.
 * @see {@link GetSubscriptionDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSubscriptionDefinitionCommand = /** @class */ (function (_super) {
    __extends(GetSubscriptionDefinitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSubscriptionDefinitionCommand(input) {
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
    GetSubscriptionDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "GetSubscriptionDefinitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSubscriptionDefinitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetSubscriptionDefinitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSubscriptionDefinitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetSubscriptionDefinitionCommand(input, context);
    };
    GetSubscriptionDefinitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetSubscriptionDefinitionCommand(output, context);
    };
    return GetSubscriptionDefinitionCommand;
}($Command));
export { GetSubscriptionDefinitionCommand };
//# sourceMappingURL=GetSubscriptionDefinitionCommand.js.map