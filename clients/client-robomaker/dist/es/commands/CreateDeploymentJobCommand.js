import { __extends } from "tslib";
import { CreateDeploymentJobRequest, CreateDeploymentJobResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateDeploymentJobCommand, serializeAws_restJson1CreateDeploymentJobCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deploys a specific version of a robot application to robots in a fleet.</p>
 *          <p>The robot application must have a numbered <code>applicationVersion</code> for
 *          consistency reasons. To create a new version, use
 *             <code>CreateRobotApplicationVersion</code> or see <a href="https://docs.aws.amazon.com/robomaker/latest/dg/create-robot-application-version.html">Creating a Robot Application Version</a>. </p>
 *          <note>
 *             <p>After 90 days, deployment jobs expire and will be deleted. They will no longer be
 *             accessible. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, CreateDeploymentJobCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, CreateDeploymentJobCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new CreateDeploymentJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDeploymentJobCommandInput} for command's `input` shape.
 * @see {@link CreateDeploymentJobCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDeploymentJobCommand = /** @class */ (function (_super) {
    __extends(CreateDeploymentJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDeploymentJobCommand(input) {
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
    CreateDeploymentJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RoboMakerClient";
        var commandName = "CreateDeploymentJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDeploymentJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDeploymentJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDeploymentJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateDeploymentJobCommand(input, context);
    };
    CreateDeploymentJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateDeploymentJobCommand(output, context);
    };
    return CreateDeploymentJobCommand;
}($Command));
export { CreateDeploymentJobCommand };
//# sourceMappingURL=CreateDeploymentJobCommand.js.map