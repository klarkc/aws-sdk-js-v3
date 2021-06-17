import { __extends } from "tslib";
import { UpdateResourceDefinitionRequest, UpdateResourceDefinitionResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateResourceDefinitionCommand, serializeAws_restJson1UpdateResourceDefinitionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Updates a resource definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, UpdateResourceDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, UpdateResourceDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new UpdateResourceDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateResourceDefinitionCommandInput} for command's `input` shape.
 * @see {@link UpdateResourceDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateResourceDefinitionCommand = /** @class */ (function (_super) {
    __extends(UpdateResourceDefinitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateResourceDefinitionCommand(input) {
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
    UpdateResourceDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "UpdateResourceDefinitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateResourceDefinitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateResourceDefinitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateResourceDefinitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateResourceDefinitionCommand(input, context);
    };
    UpdateResourceDefinitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateResourceDefinitionCommand(output, context);
    };
    return UpdateResourceDefinitionCommand;
}($Command));
export { UpdateResourceDefinitionCommand };
//# sourceMappingURL=UpdateResourceDefinitionCommand.js.map