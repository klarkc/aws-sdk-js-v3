import { __extends } from "tslib";
import { DeleteMaintenanceWindowRequest, DeleteMaintenanceWindowResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteMaintenanceWindowCommand, serializeAws_json1_1DeleteMaintenanceWindowCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a maintenance window.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeleteMaintenanceWindowCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeleteMaintenanceWindowCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DeleteMaintenanceWindowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMaintenanceWindowCommandInput} for command's `input` shape.
 * @see {@link DeleteMaintenanceWindowCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteMaintenanceWindowCommand = /** @class */ (function (_super) {
    __extends(DeleteMaintenanceWindowCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteMaintenanceWindowCommand(input) {
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
    DeleteMaintenanceWindowCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DeleteMaintenanceWindowCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteMaintenanceWindowRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteMaintenanceWindowResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteMaintenanceWindowCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteMaintenanceWindowCommand(input, context);
    };
    DeleteMaintenanceWindowCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteMaintenanceWindowCommand(output, context);
    };
    return DeleteMaintenanceWindowCommand;
}($Command));
export { DeleteMaintenanceWindowCommand };
//# sourceMappingURL=DeleteMaintenanceWindowCommand.js.map