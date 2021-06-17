import { __extends } from "tslib";
import { CreateFunctionDefinitionVersionRequest, CreateFunctionDefinitionVersionResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateFunctionDefinitionVersionCommand, serializeAws_restJson1CreateFunctionDefinitionVersionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Creates a version of a Lambda function definition that has already been defined.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateFunctionDefinitionVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateFunctionDefinitionVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new CreateFunctionDefinitionVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFunctionDefinitionVersionCommandInput} for command's `input` shape.
 * @see {@link CreateFunctionDefinitionVersionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateFunctionDefinitionVersionCommand = /** @class */ (function (_super) {
    __extends(CreateFunctionDefinitionVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateFunctionDefinitionVersionCommand(input) {
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
    CreateFunctionDefinitionVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "CreateFunctionDefinitionVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateFunctionDefinitionVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateFunctionDefinitionVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateFunctionDefinitionVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateFunctionDefinitionVersionCommand(input, context);
    };
    CreateFunctionDefinitionVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateFunctionDefinitionVersionCommand(output, context);
    };
    return CreateFunctionDefinitionVersionCommand;
}($Command));
export { CreateFunctionDefinitionVersionCommand };
//# sourceMappingURL=CreateFunctionDefinitionVersionCommand.js.map