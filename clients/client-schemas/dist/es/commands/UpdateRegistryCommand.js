import { __extends } from "tslib";
import { UpdateRegistryRequest, UpdateRegistryResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateRegistryCommand, serializeAws_restJson1UpdateRegistryCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a registry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, UpdateRegistryCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, UpdateRegistryCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const command = new UpdateRegistryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRegistryCommandInput} for command's `input` shape.
 * @see {@link UpdateRegistryCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateRegistryCommand = /** @class */ (function (_super) {
    __extends(UpdateRegistryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateRegistryCommand(input) {
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
    UpdateRegistryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SchemasClient";
        var commandName = "UpdateRegistryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateRegistryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateRegistryResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateRegistryCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateRegistryCommand(input, context);
    };
    UpdateRegistryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateRegistryCommand(output, context);
    };
    return UpdateRegistryCommand;
}($Command));
export { UpdateRegistryCommand };
//# sourceMappingURL=UpdateRegistryCommand.js.map