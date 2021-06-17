import { __extends } from "tslib";
import { CreateDeploymentInput, CreateDeploymentOutput } from "../models/models_0";
import { deserializeAws_json1_1CreateDeploymentCommand, serializeAws_json1_1CreateDeploymentCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deploys an application revision through the specified deployment group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, CreateDeploymentCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, CreateDeploymentCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new CreateDeploymentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDeploymentCommandInput} for command's `input` shape.
 * @see {@link CreateDeploymentCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDeploymentCommand = /** @class */ (function (_super) {
    __extends(CreateDeploymentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDeploymentCommand(input) {
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
    CreateDeploymentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeDeployClient";
        var commandName = "CreateDeploymentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDeploymentInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDeploymentOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDeploymentCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateDeploymentCommand(input, context);
    };
    CreateDeploymentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateDeploymentCommand(output, context);
    };
    return CreateDeploymentCommand;
}($Command));
export { CreateDeploymentCommand };
//# sourceMappingURL=CreateDeploymentCommand.js.map