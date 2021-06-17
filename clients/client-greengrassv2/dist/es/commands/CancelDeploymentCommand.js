import { __extends } from "tslib";
import { CancelDeploymentRequest, CancelDeploymentResponse } from "../models/models_0";
import { deserializeAws_restJson1CancelDeploymentCommand, serializeAws_restJson1CancelDeploymentCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Cancels a deployment. This operation cancels the deployment for devices that haven't yet
 *       received it. If a device already received the deployment, this operation doesn't change
 *       anything for that device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, CancelDeploymentCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, CancelDeploymentCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * const client = new GreengrassV2Client(config);
 * const command = new CancelDeploymentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelDeploymentCommandInput} for command's `input` shape.
 * @see {@link CancelDeploymentCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CancelDeploymentCommand = /** @class */ (function (_super) {
    __extends(CancelDeploymentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CancelDeploymentCommand(input) {
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
    CancelDeploymentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassV2Client";
        var commandName = "CancelDeploymentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CancelDeploymentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CancelDeploymentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CancelDeploymentCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CancelDeploymentCommand(input, context);
    };
    CancelDeploymentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CancelDeploymentCommand(output, context);
    };
    return CancelDeploymentCommand;
}($Command));
export { CancelDeploymentCommand };
//# sourceMappingURL=CancelDeploymentCommand.js.map