import { __extends } from "tslib";
import { RegisterContainerInstanceRequest, RegisterContainerInstanceResponse } from "../models/models_0";
import { deserializeAws_json1_1RegisterContainerInstanceCommand, serializeAws_json1_1RegisterContainerInstanceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <note>
 *             <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p>
 *          </note>
 *          <p>Registers an EC2
 * 			instance into the specified cluster. This instance becomes available to place containers
 * 			on.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, RegisterContainerInstanceCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, RegisterContainerInstanceCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new RegisterContainerInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterContainerInstanceCommandInput} for command's `input` shape.
 * @see {@link RegisterContainerInstanceCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RegisterContainerInstanceCommand = /** @class */ (function (_super) {
    __extends(RegisterContainerInstanceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RegisterContainerInstanceCommand(input) {
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
    RegisterContainerInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECSClient";
        var commandName = "RegisterContainerInstanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RegisterContainerInstanceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RegisterContainerInstanceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RegisterContainerInstanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RegisterContainerInstanceCommand(input, context);
    };
    RegisterContainerInstanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RegisterContainerInstanceCommand(output, context);
    };
    return RegisterContainerInstanceCommand;
}($Command));
export { RegisterContainerInstanceCommand };
//# sourceMappingURL=RegisterContainerInstanceCommand.js.map