import { __extends } from "tslib";
import { CreateDeploymentGroupInput, CreateDeploymentGroupOutput } from "../models/models_0";
import { deserializeAws_json1_1CreateDeploymentGroupCommand, serializeAws_json1_1CreateDeploymentGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a deployment group to which application revisions are deployed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, CreateDeploymentGroupCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, CreateDeploymentGroupCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new CreateDeploymentGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDeploymentGroupCommandInput} for command's `input` shape.
 * @see {@link CreateDeploymentGroupCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDeploymentGroupCommand = /** @class */ (function (_super) {
    __extends(CreateDeploymentGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDeploymentGroupCommand(input) {
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
    CreateDeploymentGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeDeployClient";
        var commandName = "CreateDeploymentGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDeploymentGroupInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDeploymentGroupOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDeploymentGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateDeploymentGroupCommand(input, context);
    };
    CreateDeploymentGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateDeploymentGroupCommand(output, context);
    };
    return CreateDeploymentGroupCommand;
}($Command));
export { CreateDeploymentGroupCommand };
//# sourceMappingURL=CreateDeploymentGroupCommand.js.map