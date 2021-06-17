import { __extends } from "tslib";
import { DeleteResourceConfigRequest } from "../models/models_0";
import { deserializeAws_json1_1DeleteResourceConfigCommand, serializeAws_json1_1DeleteResourceConfigCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Records the configuration state for a custom resource that has been deleted.  This API records a new ConfigurationItem with a ResourceDeleted status. You can retrieve the ConfigurationItems recorded for this resource in your AWS Config History.
 * 			 </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DeleteResourceConfigCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DeleteResourceConfigCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DeleteResourceConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteResourceConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteResourceConfigCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteResourceConfigCommand = /** @class */ (function (_super) {
    __extends(DeleteResourceConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteResourceConfigCommand(input) {
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
    DeleteResourceConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "DeleteResourceConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteResourceConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteResourceConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteResourceConfigCommand(input, context);
    };
    DeleteResourceConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteResourceConfigCommand(output, context);
    };
    return DeleteResourceConfigCommand;
}($Command));
export { DeleteResourceConfigCommand };
//# sourceMappingURL=DeleteResourceConfigCommand.js.map