import { __extends } from "tslib";
import { UpdateServicePrimaryTaskSetRequest, UpdateServicePrimaryTaskSetResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateServicePrimaryTaskSetCommand, serializeAws_json1_1UpdateServicePrimaryTaskSetCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies which task set in a service is the primary task set. Any parameters that are
 * 			updated on the primary task set in a service will transition to the service. This is
 * 			used when a service uses the <code>EXTERNAL</code> deployment controller type. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment
 * 				Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, UpdateServicePrimaryTaskSetCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, UpdateServicePrimaryTaskSetCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new UpdateServicePrimaryTaskSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateServicePrimaryTaskSetCommandInput} for command's `input` shape.
 * @see {@link UpdateServicePrimaryTaskSetCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateServicePrimaryTaskSetCommand = /** @class */ (function (_super) {
    __extends(UpdateServicePrimaryTaskSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateServicePrimaryTaskSetCommand(input) {
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
    UpdateServicePrimaryTaskSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECSClient";
        var commandName = "UpdateServicePrimaryTaskSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateServicePrimaryTaskSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateServicePrimaryTaskSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateServicePrimaryTaskSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateServicePrimaryTaskSetCommand(input, context);
    };
    UpdateServicePrimaryTaskSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateServicePrimaryTaskSetCommand(output, context);
    };
    return UpdateServicePrimaryTaskSetCommand;
}($Command));
export { UpdateServicePrimaryTaskSetCommand };
//# sourceMappingURL=UpdateServicePrimaryTaskSetCommand.js.map