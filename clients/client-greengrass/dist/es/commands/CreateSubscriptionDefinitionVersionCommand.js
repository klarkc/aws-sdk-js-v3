import { __extends } from "tslib";
import { CreateSubscriptionDefinitionVersionRequest, CreateSubscriptionDefinitionVersionResponse, } from "../models/models_0";
import { deserializeAws_restJson1CreateSubscriptionDefinitionVersionCommand, serializeAws_restJson1CreateSubscriptionDefinitionVersionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Creates a version of a subscription definition which has already been defined.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateSubscriptionDefinitionVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateSubscriptionDefinitionVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new CreateSubscriptionDefinitionVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSubscriptionDefinitionVersionCommandInput} for command's `input` shape.
 * @see {@link CreateSubscriptionDefinitionVersionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateSubscriptionDefinitionVersionCommand = /** @class */ (function (_super) {
    __extends(CreateSubscriptionDefinitionVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateSubscriptionDefinitionVersionCommand(input) {
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
    CreateSubscriptionDefinitionVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "CreateSubscriptionDefinitionVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateSubscriptionDefinitionVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateSubscriptionDefinitionVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateSubscriptionDefinitionVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateSubscriptionDefinitionVersionCommand(input, context);
    };
    CreateSubscriptionDefinitionVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateSubscriptionDefinitionVersionCommand(output, context);
    };
    return CreateSubscriptionDefinitionVersionCommand;
}($Command));
export { CreateSubscriptionDefinitionVersionCommand };
//# sourceMappingURL=CreateSubscriptionDefinitionVersionCommand.js.map