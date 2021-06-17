import { __extends } from "tslib";
import { DeleteHsmConfigurationMessage } from "../models/models_0";
import { deserializeAws_queryDeleteHsmConfigurationCommand, serializeAws_queryDeleteHsmConfigurationCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified Amazon Redshift HSM configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DeleteHsmConfigurationCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DeleteHsmConfigurationCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DeleteHsmConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteHsmConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteHsmConfigurationCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteHsmConfigurationCommand = /** @class */ (function (_super) {
    __extends(DeleteHsmConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteHsmConfigurationCommand(input) {
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
    DeleteHsmConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "DeleteHsmConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteHsmConfigurationMessage.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteHsmConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteHsmConfigurationCommand(input, context);
    };
    DeleteHsmConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteHsmConfigurationCommand(output, context);
    };
    return DeleteHsmConfigurationCommand;
}($Command));
export { DeleteHsmConfigurationCommand };
//# sourceMappingURL=DeleteHsmConfigurationCommand.js.map