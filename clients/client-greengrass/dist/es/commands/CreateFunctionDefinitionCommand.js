import { __extends } from "tslib";
import { CreateFunctionDefinitionRequest, CreateFunctionDefinitionResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateFunctionDefinitionCommand, serializeAws_restJson1CreateFunctionDefinitionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Creates a Lambda function definition which contains a list of Lambda functions and their configurations to be used in a group. You can create an initial version of the definition by providing a list of Lambda functions and their configurations now, or use ''CreateFunctionDefinitionVersion'' later.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateFunctionDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateFunctionDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new CreateFunctionDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFunctionDefinitionCommandInput} for command's `input` shape.
 * @see {@link CreateFunctionDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateFunctionDefinitionCommand = /** @class */ (function (_super) {
    __extends(CreateFunctionDefinitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateFunctionDefinitionCommand(input) {
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
    CreateFunctionDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "CreateFunctionDefinitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateFunctionDefinitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateFunctionDefinitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateFunctionDefinitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateFunctionDefinitionCommand(input, context);
    };
    CreateFunctionDefinitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateFunctionDefinitionCommand(output, context);
    };
    return CreateFunctionDefinitionCommand;
}($Command));
export { CreateFunctionDefinitionCommand };
//# sourceMappingURL=CreateFunctionDefinitionCommand.js.map