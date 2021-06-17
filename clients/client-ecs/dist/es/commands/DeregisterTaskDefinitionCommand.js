import { __extends } from "tslib";
import { DeregisterTaskDefinitionRequest, DeregisterTaskDefinitionResponse } from "../models/models_0";
import { deserializeAws_json1_1DeregisterTaskDefinitionCommand, serializeAws_json1_1DeregisterTaskDefinitionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deregisters the specified task definition by family and revision. Upon deregistration,
 * 			the task definition is marked as <code>INACTIVE</code>. Existing tasks and services that
 * 			reference an <code>INACTIVE</code> task definition continue to run without disruption.
 * 			Existing services that reference an <code>INACTIVE</code> task definition can still
 * 			scale up or down by modifying the service's desired count.</p>
 * 		       <p>You cannot use an <code>INACTIVE</code> task definition to run new tasks or create new
 * 			services, and you cannot update an existing service to reference an
 * 				<code>INACTIVE</code> task definition. However, there may be up to a 10-minute
 * 			window following deregistration where these restrictions have not yet taken
 * 			effect.</p>
 * 		       <note>
 * 			         <p>At this time, <code>INACTIVE</code> task definitions remain discoverable in your
 * 				account indefinitely. However, this behavior is subject to change in the future, so
 * 				you should not rely on <code>INACTIVE</code> task definitions persisting beyond the
 * 				lifecycle of any associated tasks and services.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DeregisterTaskDefinitionCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DeregisterTaskDefinitionCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new DeregisterTaskDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterTaskDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeregisterTaskDefinitionCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeregisterTaskDefinitionCommand = /** @class */ (function (_super) {
    __extends(DeregisterTaskDefinitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeregisterTaskDefinitionCommand(input) {
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
    DeregisterTaskDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECSClient";
        var commandName = "DeregisterTaskDefinitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeregisterTaskDefinitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeregisterTaskDefinitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeregisterTaskDefinitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeregisterTaskDefinitionCommand(input, context);
    };
    DeregisterTaskDefinitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeregisterTaskDefinitionCommand(output, context);
    };
    return DeregisterTaskDefinitionCommand;
}($Command));
export { DeregisterTaskDefinitionCommand };
//# sourceMappingURL=DeregisterTaskDefinitionCommand.js.map