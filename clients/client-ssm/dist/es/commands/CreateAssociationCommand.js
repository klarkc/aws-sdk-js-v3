import { __extends } from "tslib";
import { CreateAssociationRequest, CreateAssociationResult } from "../models/models_0";
import { deserializeAws_json1_1CreateAssociationCommand, serializeAws_json1_1CreateAssociationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>A State Manager association defines the state that you want to maintain on your instances.
 *    For example, an association can specify that anti-virus software must be installed and running on
 *    your instances, or that certain ports must be closed. For static targets, the association
 *    specifies a schedule for when the configuration is reapplied. For dynamic targets, such as an AWS
 *    Resource Group or an AWS Autoscaling Group, State Manager applies the configuration when new
 *    instances are added to the group. The association also specifies actions to take when applying
 *    the configuration. For example, an association for anti-virus software might run once a day. If
 *    the software is not installed, then State Manager installs it. If the software is installed, but
 *    the service is not running, then the association might instruct State Manager to start the
 *    service. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, CreateAssociationCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, CreateAssociationCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new CreateAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateAssociationCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateAssociationCommand = /** @class */ (function (_super) {
    __extends(CreateAssociationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateAssociationCommand(input) {
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
    CreateAssociationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "CreateAssociationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateAssociationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateAssociationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateAssociationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateAssociationCommand(input, context);
    };
    CreateAssociationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateAssociationCommand(output, context);
    };
    return CreateAssociationCommand;
}($Command));
export { CreateAssociationCommand };
//# sourceMappingURL=CreateAssociationCommand.js.map