import { __extends } from "tslib";
import { CancelDeploymentJobRequest, CancelDeploymentJobResponse } from "../models/models_0";
import { deserializeAws_restJson1CancelDeploymentJobCommand, serializeAws_restJson1CancelDeploymentJobCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Cancels the specified deployment job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, CancelDeploymentJobCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, CancelDeploymentJobCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new CancelDeploymentJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelDeploymentJobCommandInput} for command's `input` shape.
 * @see {@link CancelDeploymentJobCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CancelDeploymentJobCommand = /** @class */ (function (_super) {
    __extends(CancelDeploymentJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CancelDeploymentJobCommand(input) {
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
    CancelDeploymentJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RoboMakerClient";
        var commandName = "CancelDeploymentJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CancelDeploymentJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CancelDeploymentJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CancelDeploymentJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CancelDeploymentJobCommand(input, context);
    };
    CancelDeploymentJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CancelDeploymentJobCommand(output, context);
    };
    return CancelDeploymentJobCommand;
}($Command));
export { CancelDeploymentJobCommand };
//# sourceMappingURL=CancelDeploymentJobCommand.js.map