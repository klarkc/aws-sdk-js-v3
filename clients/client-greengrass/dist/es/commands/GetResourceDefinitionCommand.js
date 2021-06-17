import { __extends } from "tslib";
import { GetResourceDefinitionRequest, GetResourceDefinitionResponse } from "../models/models_0";
import { deserializeAws_restJson1GetResourceDefinitionCommand, serializeAws_restJson1GetResourceDefinitionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Retrieves information about a resource definition, including its creation time and latest version.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetResourceDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetResourceDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new GetResourceDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResourceDefinitionCommandInput} for command's `input` shape.
 * @see {@link GetResourceDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetResourceDefinitionCommand = /** @class */ (function (_super) {
    __extends(GetResourceDefinitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetResourceDefinitionCommand(input) {
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
    GetResourceDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "GetResourceDefinitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetResourceDefinitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetResourceDefinitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetResourceDefinitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetResourceDefinitionCommand(input, context);
    };
    GetResourceDefinitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetResourceDefinitionCommand(output, context);
    };
    return GetResourceDefinitionCommand;
}($Command));
export { GetResourceDefinitionCommand };
//# sourceMappingURL=GetResourceDefinitionCommand.js.map