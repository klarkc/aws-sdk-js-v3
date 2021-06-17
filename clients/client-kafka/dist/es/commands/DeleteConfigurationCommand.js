import { __extends } from "tslib";
import { DeleteConfigurationRequest, DeleteConfigurationResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteConfigurationCommand, serializeAws_restJson1DeleteConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an MSK Configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, DeleteConfigurationCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, DeleteConfigurationCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const command = new DeleteConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteConfigurationCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteConfigurationCommand = /** @class */ (function (_super) {
    __extends(DeleteConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteConfigurationCommand(input) {
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
    DeleteConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KafkaClient";
        var commandName = "DeleteConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteConfigurationCommand(input, context);
    };
    DeleteConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteConfigurationCommand(output, context);
    };
    return DeleteConfigurationCommand;
}($Command));
export { DeleteConfigurationCommand };
//# sourceMappingURL=DeleteConfigurationCommand.js.map