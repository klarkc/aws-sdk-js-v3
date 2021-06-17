import { __extends } from "tslib";
import { GetFunctionDefinitionVersionRequest, GetFunctionDefinitionVersionResponse } from "../models/models_0";
import { deserializeAws_restJson1GetFunctionDefinitionVersionCommand, serializeAws_restJson1GetFunctionDefinitionVersionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Retrieves information about a Lambda function definition version, including which Lambda functions are included in the version and their configurations.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetFunctionDefinitionVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetFunctionDefinitionVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new GetFunctionDefinitionVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFunctionDefinitionVersionCommandInput} for command's `input` shape.
 * @see {@link GetFunctionDefinitionVersionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetFunctionDefinitionVersionCommand = /** @class */ (function (_super) {
    __extends(GetFunctionDefinitionVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetFunctionDefinitionVersionCommand(input) {
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
    GetFunctionDefinitionVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "GetFunctionDefinitionVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetFunctionDefinitionVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetFunctionDefinitionVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetFunctionDefinitionVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetFunctionDefinitionVersionCommand(input, context);
    };
    GetFunctionDefinitionVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetFunctionDefinitionVersionCommand(output, context);
    };
    return GetFunctionDefinitionVersionCommand;
}($Command));
export { GetFunctionDefinitionVersionCommand };
//# sourceMappingURL=GetFunctionDefinitionVersionCommand.js.map