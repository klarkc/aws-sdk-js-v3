import { __extends } from "tslib";
import { GetResourceDefinitionVersionRequest, GetResourceDefinitionVersionResponse } from "../models/models_0";
import { deserializeAws_restJson1GetResourceDefinitionVersionCommand, serializeAws_restJson1GetResourceDefinitionVersionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Retrieves information about a resource definition version, including which resources are included in the version.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetResourceDefinitionVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetResourceDefinitionVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new GetResourceDefinitionVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResourceDefinitionVersionCommandInput} for command's `input` shape.
 * @see {@link GetResourceDefinitionVersionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetResourceDefinitionVersionCommand = /** @class */ (function (_super) {
    __extends(GetResourceDefinitionVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetResourceDefinitionVersionCommand(input) {
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
    GetResourceDefinitionVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "GetResourceDefinitionVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetResourceDefinitionVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetResourceDefinitionVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetResourceDefinitionVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetResourceDefinitionVersionCommand(input, context);
    };
    GetResourceDefinitionVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetResourceDefinitionVersionCommand(output, context);
    };
    return GetResourceDefinitionVersionCommand;
}($Command));
export { GetResourceDefinitionVersionCommand };
//# sourceMappingURL=GetResourceDefinitionVersionCommand.js.map