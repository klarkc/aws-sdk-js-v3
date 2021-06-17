import { __extends } from "tslib";
import { DescribeDeploymentJobRequest, DescribeDeploymentJobResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeDeploymentJobCommand, serializeAws_restJson1DescribeDeploymentJobCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes a deployment job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, DescribeDeploymentJobCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, DescribeDeploymentJobCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new DescribeDeploymentJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDeploymentJobCommandInput} for command's `input` shape.
 * @see {@link DescribeDeploymentJobCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDeploymentJobCommand = /** @class */ (function (_super) {
    __extends(DescribeDeploymentJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDeploymentJobCommand(input) {
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
    DescribeDeploymentJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RoboMakerClient";
        var commandName = "DescribeDeploymentJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDeploymentJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDeploymentJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDeploymentJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeDeploymentJobCommand(input, context);
    };
    DescribeDeploymentJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeDeploymentJobCommand(output, context);
    };
    return DescribeDeploymentJobCommand;
}($Command));
export { DescribeDeploymentJobCommand };
//# sourceMappingURL=DescribeDeploymentJobCommand.js.map