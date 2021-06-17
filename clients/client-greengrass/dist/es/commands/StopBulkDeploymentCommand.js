import { __extends } from "tslib";
import { StopBulkDeploymentRequest, StopBulkDeploymentResponse } from "../models/models_0";
import { deserializeAws_restJson1StopBulkDeploymentCommand, serializeAws_restJson1StopBulkDeploymentCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Stops the execution of a bulk deployment. This action returns a status of ''Stopping'' until the deployment is stopped. You cannot start a new bulk deployment while a previous deployment is in the ''Stopping'' state. This action doesn't rollback completed deployments or cancel pending deployments.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, StopBulkDeploymentCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, StopBulkDeploymentCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new StopBulkDeploymentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopBulkDeploymentCommandInput} for command's `input` shape.
 * @see {@link StopBulkDeploymentCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopBulkDeploymentCommand = /** @class */ (function (_super) {
    __extends(StopBulkDeploymentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopBulkDeploymentCommand(input) {
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
    StopBulkDeploymentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "StopBulkDeploymentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopBulkDeploymentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StopBulkDeploymentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopBulkDeploymentCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StopBulkDeploymentCommand(input, context);
    };
    StopBulkDeploymentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StopBulkDeploymentCommand(output, context);
    };
    return StopBulkDeploymentCommand;
}($Command));
export { StopBulkDeploymentCommand };
//# sourceMappingURL=StopBulkDeploymentCommand.js.map