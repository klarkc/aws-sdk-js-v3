import { __extends } from "tslib";
import { GetLoggerDefinitionVersionRequest, GetLoggerDefinitionVersionResponse } from "../models/models_0";
import { deserializeAws_restJson1GetLoggerDefinitionVersionCommand, serializeAws_restJson1GetLoggerDefinitionVersionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Retrieves information about a logger definition version.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetLoggerDefinitionVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetLoggerDefinitionVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new GetLoggerDefinitionVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLoggerDefinitionVersionCommandInput} for command's `input` shape.
 * @see {@link GetLoggerDefinitionVersionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetLoggerDefinitionVersionCommand = /** @class */ (function (_super) {
    __extends(GetLoggerDefinitionVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetLoggerDefinitionVersionCommand(input) {
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
    GetLoggerDefinitionVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "GetLoggerDefinitionVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetLoggerDefinitionVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetLoggerDefinitionVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetLoggerDefinitionVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetLoggerDefinitionVersionCommand(input, context);
    };
    GetLoggerDefinitionVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetLoggerDefinitionVersionCommand(output, context);
    };
    return GetLoggerDefinitionVersionCommand;
}($Command));
export { GetLoggerDefinitionVersionCommand };
//# sourceMappingURL=GetLoggerDefinitionVersionCommand.js.map