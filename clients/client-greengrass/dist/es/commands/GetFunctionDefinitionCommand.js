import { __extends } from "tslib";
import { GetFunctionDefinitionRequest, GetFunctionDefinitionResponse } from "../models/models_0";
import { deserializeAws_restJson1GetFunctionDefinitionCommand, serializeAws_restJson1GetFunctionDefinitionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Retrieves information about a Lambda function definition, including its creation time and latest version.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetFunctionDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetFunctionDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new GetFunctionDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFunctionDefinitionCommandInput} for command's `input` shape.
 * @see {@link GetFunctionDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetFunctionDefinitionCommand = /** @class */ (function (_super) {
    __extends(GetFunctionDefinitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetFunctionDefinitionCommand(input) {
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
    GetFunctionDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "GetFunctionDefinitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetFunctionDefinitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetFunctionDefinitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetFunctionDefinitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetFunctionDefinitionCommand(input, context);
    };
    GetFunctionDefinitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetFunctionDefinitionCommand(output, context);
    };
    return GetFunctionDefinitionCommand;
}($Command));
export { GetFunctionDefinitionCommand };
//# sourceMappingURL=GetFunctionDefinitionCommand.js.map