import { __extends } from "tslib";
import { UpdateCoreDefinitionRequest, UpdateCoreDefinitionResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateCoreDefinitionCommand, serializeAws_restJson1UpdateCoreDefinitionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Updates a core definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, UpdateCoreDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, UpdateCoreDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new UpdateCoreDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCoreDefinitionCommandInput} for command's `input` shape.
 * @see {@link UpdateCoreDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateCoreDefinitionCommand = /** @class */ (function (_super) {
    __extends(UpdateCoreDefinitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateCoreDefinitionCommand(input) {
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
    UpdateCoreDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "UpdateCoreDefinitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateCoreDefinitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateCoreDefinitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateCoreDefinitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateCoreDefinitionCommand(input, context);
    };
    UpdateCoreDefinitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateCoreDefinitionCommand(output, context);
    };
    return UpdateCoreDefinitionCommand;
}($Command));
export { UpdateCoreDefinitionCommand };
//# sourceMappingURL=UpdateCoreDefinitionCommand.js.map