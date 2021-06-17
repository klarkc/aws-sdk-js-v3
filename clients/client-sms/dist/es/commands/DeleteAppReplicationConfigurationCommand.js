import { __extends } from "tslib";
import { DeleteAppReplicationConfigurationRequest, DeleteAppReplicationConfigurationResponse, } from "../models/models_0";
import { deserializeAws_json1_1DeleteAppReplicationConfigurationCommand, serializeAws_json1_1DeleteAppReplicationConfigurationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the replication configuration for the specified application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, DeleteAppReplicationConfigurationCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, DeleteAppReplicationConfigurationCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new DeleteAppReplicationConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAppReplicationConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteAppReplicationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAppReplicationConfigurationCommand = /** @class */ (function (_super) {
    __extends(DeleteAppReplicationConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteAppReplicationConfigurationCommand(input) {
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
    DeleteAppReplicationConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SMSClient";
        var commandName = "DeleteAppReplicationConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteAppReplicationConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteAppReplicationConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteAppReplicationConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteAppReplicationConfigurationCommand(input, context);
    };
    DeleteAppReplicationConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteAppReplicationConfigurationCommand(output, context);
    };
    return DeleteAppReplicationConfigurationCommand;
}($Command));
export { DeleteAppReplicationConfigurationCommand };
//# sourceMappingURL=DeleteAppReplicationConfigurationCommand.js.map