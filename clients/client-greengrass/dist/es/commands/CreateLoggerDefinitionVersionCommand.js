import { __extends } from "tslib";
import { CreateLoggerDefinitionVersionRequest, CreateLoggerDefinitionVersionResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateLoggerDefinitionVersionCommand, serializeAws_restJson1CreateLoggerDefinitionVersionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Creates a version of a logger definition that has already been defined.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateLoggerDefinitionVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateLoggerDefinitionVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new CreateLoggerDefinitionVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLoggerDefinitionVersionCommandInput} for command's `input` shape.
 * @see {@link CreateLoggerDefinitionVersionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateLoggerDefinitionVersionCommand = /** @class */ (function (_super) {
    __extends(CreateLoggerDefinitionVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateLoggerDefinitionVersionCommand(input) {
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
    CreateLoggerDefinitionVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "CreateLoggerDefinitionVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateLoggerDefinitionVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateLoggerDefinitionVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateLoggerDefinitionVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateLoggerDefinitionVersionCommand(input, context);
    };
    CreateLoggerDefinitionVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateLoggerDefinitionVersionCommand(output, context);
    };
    return CreateLoggerDefinitionVersionCommand;
}($Command));
export { CreateLoggerDefinitionVersionCommand };
//# sourceMappingURL=CreateLoggerDefinitionVersionCommand.js.map