import { __extends } from "tslib";
import { StartBulkDeploymentRequest, StartBulkDeploymentResponse } from "../models/models_0";
import { deserializeAws_restJson1StartBulkDeploymentCommand, serializeAws_restJson1StartBulkDeploymentCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Deploys multiple groups in one operation. This action starts the bulk deployment of a specified set of group versions. Each group version deployment will be triggered with an adaptive rate that has a fixed upper limit. We recommend that you include an ''X-Amzn-Client-Token'' token in every ''StartBulkDeployment'' request. These requests are idempotent with respect to the token and the request parameters.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, StartBulkDeploymentCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, StartBulkDeploymentCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new StartBulkDeploymentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartBulkDeploymentCommandInput} for command's `input` shape.
 * @see {@link StartBulkDeploymentCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartBulkDeploymentCommand = /** @class */ (function (_super) {
    __extends(StartBulkDeploymentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartBulkDeploymentCommand(input) {
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
    StartBulkDeploymentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "StartBulkDeploymentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartBulkDeploymentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartBulkDeploymentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartBulkDeploymentCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StartBulkDeploymentCommand(input, context);
    };
    StartBulkDeploymentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StartBulkDeploymentCommand(output, context);
    };
    return StartBulkDeploymentCommand;
}($Command));
export { StartBulkDeploymentCommand };
//# sourceMappingURL=StartBulkDeploymentCommand.js.map