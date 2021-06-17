import { __extends } from "tslib";
import { GetLoggerDefinitionRequest, GetLoggerDefinitionResponse } from "../models/models_0";
import { deserializeAws_restJson1GetLoggerDefinitionCommand, serializeAws_restJson1GetLoggerDefinitionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Retrieves information about a logger definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetLoggerDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetLoggerDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new GetLoggerDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLoggerDefinitionCommandInput} for command's `input` shape.
 * @see {@link GetLoggerDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetLoggerDefinitionCommand = /** @class */ (function (_super) {
    __extends(GetLoggerDefinitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetLoggerDefinitionCommand(input) {
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
    GetLoggerDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "GetLoggerDefinitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetLoggerDefinitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetLoggerDefinitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetLoggerDefinitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetLoggerDefinitionCommand(input, context);
    };
    GetLoggerDefinitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetLoggerDefinitionCommand(output, context);
    };
    return GetLoggerDefinitionCommand;
}($Command));
export { GetLoggerDefinitionCommand };
//# sourceMappingURL=GetLoggerDefinitionCommand.js.map