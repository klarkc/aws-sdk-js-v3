import { __extends } from "tslib";
import { DeleteConfigurationAggregatorRequest } from "../models/models_0";
import { deserializeAws_json1_1DeleteConfigurationAggregatorCommand, serializeAws_json1_1DeleteConfigurationAggregatorCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified configuration aggregator and the
 * 			aggregated data associated with the aggregator.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DeleteConfigurationAggregatorCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DeleteConfigurationAggregatorCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DeleteConfigurationAggregatorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteConfigurationAggregatorCommandInput} for command's `input` shape.
 * @see {@link DeleteConfigurationAggregatorCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteConfigurationAggregatorCommand = /** @class */ (function (_super) {
    __extends(DeleteConfigurationAggregatorCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteConfigurationAggregatorCommand(input) {
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
    DeleteConfigurationAggregatorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "DeleteConfigurationAggregatorCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteConfigurationAggregatorRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteConfigurationAggregatorCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteConfigurationAggregatorCommand(input, context);
    };
    DeleteConfigurationAggregatorCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteConfigurationAggregatorCommand(output, context);
    };
    return DeleteConfigurationAggregatorCommand;
}($Command));
export { DeleteConfigurationAggregatorCommand };
//# sourceMappingURL=DeleteConfigurationAggregatorCommand.js.map