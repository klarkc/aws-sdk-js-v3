import { __extends } from "tslib";
import { DeleteConfigurationRecorderRequest } from "../models/models_0";
import { deserializeAws_json1_1DeleteConfigurationRecorderCommand, serializeAws_json1_1DeleteConfigurationRecorderCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the configuration recorder.</p>
 * 		       <p>After the configuration recorder is deleted, AWS Config will
 * 			not record resource configuration changes until you create a new
 * 			configuration recorder.</p>
 * 		       <p>This action does not delete the configuration information that
 * 			was previously recorded. You will be able to access the previously
 * 			recorded information by using the
 * 				<code>GetResourceConfigHistory</code> action, but you will not
 * 			be able to access this information in the AWS Config console until
 * 			you create a new configuration recorder.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DeleteConfigurationRecorderCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DeleteConfigurationRecorderCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DeleteConfigurationRecorderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteConfigurationRecorderCommandInput} for command's `input` shape.
 * @see {@link DeleteConfigurationRecorderCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteConfigurationRecorderCommand = /** @class */ (function (_super) {
    __extends(DeleteConfigurationRecorderCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteConfigurationRecorderCommand(input) {
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
    DeleteConfigurationRecorderCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "DeleteConfigurationRecorderCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteConfigurationRecorderRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteConfigurationRecorderCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteConfigurationRecorderCommand(input, context);
    };
    DeleteConfigurationRecorderCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteConfigurationRecorderCommand(output, context);
    };
    return DeleteConfigurationRecorderCommand;
}($Command));
export { DeleteConfigurationRecorderCommand };
//# sourceMappingURL=DeleteConfigurationRecorderCommand.js.map