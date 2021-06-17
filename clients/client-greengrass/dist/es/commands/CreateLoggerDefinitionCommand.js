import { __extends } from "tslib";
import { CreateLoggerDefinitionRequest, CreateLoggerDefinitionResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateLoggerDefinitionCommand, serializeAws_restJson1CreateLoggerDefinitionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Creates a logger definition. You may provide the initial version of the logger definition now or use ''CreateLoggerDefinitionVersion'' at a later time.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateLoggerDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateLoggerDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new CreateLoggerDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLoggerDefinitionCommandInput} for command's `input` shape.
 * @see {@link CreateLoggerDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateLoggerDefinitionCommand = /** @class */ (function (_super) {
    __extends(CreateLoggerDefinitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateLoggerDefinitionCommand(input) {
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
    CreateLoggerDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "CreateLoggerDefinitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateLoggerDefinitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateLoggerDefinitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateLoggerDefinitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateLoggerDefinitionCommand(input, context);
    };
    CreateLoggerDefinitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateLoggerDefinitionCommand(output, context);
    };
    return CreateLoggerDefinitionCommand;
}($Command));
export { CreateLoggerDefinitionCommand };
//# sourceMappingURL=CreateLoggerDefinitionCommand.js.map