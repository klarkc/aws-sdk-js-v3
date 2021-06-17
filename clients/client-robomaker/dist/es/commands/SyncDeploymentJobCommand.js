import { __extends } from "tslib";
import { SyncDeploymentJobRequest, SyncDeploymentJobResponse } from "../models/models_0";
import { deserializeAws_restJson1SyncDeploymentJobCommand, serializeAws_restJson1SyncDeploymentJobCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Syncrhonizes robots in a fleet to the latest deployment. This is helpful if robots were
 *          added after a deployment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, SyncDeploymentJobCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, SyncDeploymentJobCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new SyncDeploymentJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SyncDeploymentJobCommandInput} for command's `input` shape.
 * @see {@link SyncDeploymentJobCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SyncDeploymentJobCommand = /** @class */ (function (_super) {
    __extends(SyncDeploymentJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SyncDeploymentJobCommand(input) {
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
    SyncDeploymentJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RoboMakerClient";
        var commandName = "SyncDeploymentJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SyncDeploymentJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SyncDeploymentJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SyncDeploymentJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1SyncDeploymentJobCommand(input, context);
    };
    SyncDeploymentJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1SyncDeploymentJobCommand(output, context);
    };
    return SyncDeploymentJobCommand;
}($Command));
export { SyncDeploymentJobCommand };
//# sourceMappingURL=SyncDeploymentJobCommand.js.map