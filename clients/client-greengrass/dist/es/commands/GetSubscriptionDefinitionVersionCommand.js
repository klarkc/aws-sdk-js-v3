import { __extends } from "tslib";
import { GetSubscriptionDefinitionVersionRequest, GetSubscriptionDefinitionVersionResponse } from "../models/models_0";
import { deserializeAws_restJson1GetSubscriptionDefinitionVersionCommand, serializeAws_restJson1GetSubscriptionDefinitionVersionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Retrieves information about a subscription definition version.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetSubscriptionDefinitionVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetSubscriptionDefinitionVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new GetSubscriptionDefinitionVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSubscriptionDefinitionVersionCommandInput} for command's `input` shape.
 * @see {@link GetSubscriptionDefinitionVersionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSubscriptionDefinitionVersionCommand = /** @class */ (function (_super) {
    __extends(GetSubscriptionDefinitionVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSubscriptionDefinitionVersionCommand(input) {
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
    GetSubscriptionDefinitionVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "GetSubscriptionDefinitionVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSubscriptionDefinitionVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetSubscriptionDefinitionVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSubscriptionDefinitionVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetSubscriptionDefinitionVersionCommand(input, context);
    };
    GetSubscriptionDefinitionVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetSubscriptionDefinitionVersionCommand(output, context);
    };
    return GetSubscriptionDefinitionVersionCommand;
}($Command));
export { GetSubscriptionDefinitionVersionCommand };
//# sourceMappingURL=GetSubscriptionDefinitionVersionCommand.js.map