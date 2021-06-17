import { __extends } from "tslib";
import { ContinueDeploymentInput } from "../models/models_0";
import { deserializeAws_json1_1ContinueDeploymentCommand, serializeAws_json1_1ContinueDeploymentCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>For a blue/green deployment, starts the process of rerouting traffic from instances in
 *             the original environment to instances in the replacement environment without waiting for
 *             a specified wait time to elapse. (Traffic rerouting, which is achieved by registering
 *             instances in the replacement environment with the load balancer, can start as soon as
 *             all instances have a status of Ready.) </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, ContinueDeploymentCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, ContinueDeploymentCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new ContinueDeploymentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ContinueDeploymentCommandInput} for command's `input` shape.
 * @see {@link ContinueDeploymentCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ContinueDeploymentCommand = /** @class */ (function (_super) {
    __extends(ContinueDeploymentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ContinueDeploymentCommand(input) {
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
    ContinueDeploymentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeDeployClient";
        var commandName = "ContinueDeploymentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ContinueDeploymentInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ContinueDeploymentCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ContinueDeploymentCommand(input, context);
    };
    ContinueDeploymentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ContinueDeploymentCommand(output, context);
    };
    return ContinueDeploymentCommand;
}($Command));
export { ContinueDeploymentCommand };
//# sourceMappingURL=ContinueDeploymentCommand.js.map