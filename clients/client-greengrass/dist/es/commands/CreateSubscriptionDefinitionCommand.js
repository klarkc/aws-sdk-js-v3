import { __extends } from "tslib";
import { CreateSubscriptionDefinitionRequest, CreateSubscriptionDefinitionResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateSubscriptionDefinitionCommand, serializeAws_restJson1CreateSubscriptionDefinitionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Creates a subscription definition. You may provide the initial version of the subscription definition now or use ''CreateSubscriptionDefinitionVersion'' at a later time.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateSubscriptionDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateSubscriptionDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new CreateSubscriptionDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSubscriptionDefinitionCommandInput} for command's `input` shape.
 * @see {@link CreateSubscriptionDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateSubscriptionDefinitionCommand = /** @class */ (function (_super) {
    __extends(CreateSubscriptionDefinitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateSubscriptionDefinitionCommand(input) {
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
    CreateSubscriptionDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "CreateSubscriptionDefinitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateSubscriptionDefinitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateSubscriptionDefinitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateSubscriptionDefinitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateSubscriptionDefinitionCommand(input, context);
    };
    CreateSubscriptionDefinitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateSubscriptionDefinitionCommand(output, context);
    };
    return CreateSubscriptionDefinitionCommand;
}($Command));
export { CreateSubscriptionDefinitionCommand };
//# sourceMappingURL=CreateSubscriptionDefinitionCommand.js.map