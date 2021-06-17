import { __extends } from "tslib";
import { UpdateClusterConfigurationRequest, UpdateClusterConfigurationResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateClusterConfigurationCommand, serializeAws_restJson1UpdateClusterConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the cluster with the configuration that is specified in the request body.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, UpdateClusterConfigurationCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, UpdateClusterConfigurationCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const command = new UpdateClusterConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateClusterConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateClusterConfigurationCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateClusterConfigurationCommand = /** @class */ (function (_super) {
    __extends(UpdateClusterConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateClusterConfigurationCommand(input) {
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
    UpdateClusterConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KafkaClient";
        var commandName = "UpdateClusterConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateClusterConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateClusterConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateClusterConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateClusterConfigurationCommand(input, context);
    };
    UpdateClusterConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateClusterConfigurationCommand(output, context);
    };
    return UpdateClusterConfigurationCommand;
}($Command));
export { UpdateClusterConfigurationCommand };
//# sourceMappingURL=UpdateClusterConfigurationCommand.js.map