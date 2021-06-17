import { __extends } from "tslib";
import { UpdateConnectorDefinitionRequest, UpdateConnectorDefinitionResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateConnectorDefinitionCommand, serializeAws_restJson1UpdateConnectorDefinitionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Updates a connector definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, UpdateConnectorDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, UpdateConnectorDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new UpdateConnectorDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateConnectorDefinitionCommandInput} for command's `input` shape.
 * @see {@link UpdateConnectorDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateConnectorDefinitionCommand = /** @class */ (function (_super) {
    __extends(UpdateConnectorDefinitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateConnectorDefinitionCommand(input) {
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
    UpdateConnectorDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "UpdateConnectorDefinitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateConnectorDefinitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateConnectorDefinitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateConnectorDefinitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateConnectorDefinitionCommand(input, context);
    };
    UpdateConnectorDefinitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateConnectorDefinitionCommand(output, context);
    };
    return UpdateConnectorDefinitionCommand;
}($Command));
export { UpdateConnectorDefinitionCommand };
//# sourceMappingURL=UpdateConnectorDefinitionCommand.js.map