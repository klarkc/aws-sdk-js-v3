import { __extends } from "tslib";
import { StopDiscovererRequest, StopDiscovererResponse } from "../models/models_0";
import { deserializeAws_restJson1StopDiscovererCommand, serializeAws_restJson1StopDiscovererCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops the discoverer</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, StopDiscovererCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, StopDiscovererCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const command = new StopDiscovererCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopDiscovererCommandInput} for command's `input` shape.
 * @see {@link StopDiscovererCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopDiscovererCommand = /** @class */ (function (_super) {
    __extends(StopDiscovererCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopDiscovererCommand(input) {
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
    StopDiscovererCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SchemasClient";
        var commandName = "StopDiscovererCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopDiscovererRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StopDiscovererResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopDiscovererCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StopDiscovererCommand(input, context);
    };
    StopDiscovererCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StopDiscovererCommand(output, context);
    };
    return StopDiscovererCommand;
}($Command));
export { StopDiscovererCommand };
//# sourceMappingURL=StopDiscovererCommand.js.map