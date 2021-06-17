import { __extends } from "tslib";
import { ReplicationConfiguration, UpdateReplicationConfigurationRequest } from "../models/models_0";
import { deserializeAws_restJson1UpdateReplicationConfigurationCommand, serializeAws_restJson1UpdateReplicationConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Allows you to update multiple ReplicationConfigurations by Source Server ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, UpdateReplicationConfigurationCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, UpdateReplicationConfigurationCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const command = new UpdateReplicationConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateReplicationConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateReplicationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateReplicationConfigurationCommand = /** @class */ (function (_super) {
    __extends(UpdateReplicationConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateReplicationConfigurationCommand(input) {
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
    UpdateReplicationConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MgnClient";
        var commandName = "UpdateReplicationConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateReplicationConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ReplicationConfiguration.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateReplicationConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateReplicationConfigurationCommand(input, context);
    };
    UpdateReplicationConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateReplicationConfigurationCommand(output, context);
    };
    return UpdateReplicationConfigurationCommand;
}($Command));
export { UpdateReplicationConfigurationCommand };
//# sourceMappingURL=UpdateReplicationConfigurationCommand.js.map