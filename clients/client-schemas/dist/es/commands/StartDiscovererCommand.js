import { __extends } from "tslib";
import { StartDiscovererRequest, StartDiscovererResponse } from "../models/models_0";
import { deserializeAws_restJson1StartDiscovererCommand, serializeAws_restJson1StartDiscovererCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts the discoverer</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, StartDiscovererCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, StartDiscovererCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const command = new StartDiscovererCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartDiscovererCommandInput} for command's `input` shape.
 * @see {@link StartDiscovererCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartDiscovererCommand = /** @class */ (function (_super) {
    __extends(StartDiscovererCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartDiscovererCommand(input) {
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
    StartDiscovererCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SchemasClient";
        var commandName = "StartDiscovererCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartDiscovererRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartDiscovererResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartDiscovererCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StartDiscovererCommand(input, context);
    };
    StartDiscovererCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StartDiscovererCommand(output, context);
    };
    return StartDiscovererCommand;
}($Command));
export { StartDiscovererCommand };
//# sourceMappingURL=StartDiscovererCommand.js.map