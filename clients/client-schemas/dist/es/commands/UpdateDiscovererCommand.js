import { __extends } from "tslib";
import { UpdateDiscovererRequest, UpdateDiscovererResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateDiscovererCommand, serializeAws_restJson1UpdateDiscovererCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the discoverer</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, UpdateDiscovererCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, UpdateDiscovererCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const command = new UpdateDiscovererCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDiscovererCommandInput} for command's `input` shape.
 * @see {@link UpdateDiscovererCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDiscovererCommand = /** @class */ (function (_super) {
    __extends(UpdateDiscovererCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateDiscovererCommand(input) {
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
    UpdateDiscovererCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SchemasClient";
        var commandName = "UpdateDiscovererCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDiscovererRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateDiscovererResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDiscovererCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateDiscovererCommand(input, context);
    };
    UpdateDiscovererCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateDiscovererCommand(output, context);
    };
    return UpdateDiscovererCommand;
}($Command));
export { UpdateDiscovererCommand };
//# sourceMappingURL=UpdateDiscovererCommand.js.map