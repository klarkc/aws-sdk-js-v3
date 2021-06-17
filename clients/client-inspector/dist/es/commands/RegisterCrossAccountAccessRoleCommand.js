import { __extends } from "tslib";
import { RegisterCrossAccountAccessRoleRequest } from "../models/models_0";
import { deserializeAws_json1_1RegisterCrossAccountAccessRoleCommand, serializeAws_json1_1RegisterCrossAccountAccessRoleCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Registers the IAM role that grants Amazon Inspector access to AWS Services needed to
 *          perform security assessments.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, RegisterCrossAccountAccessRoleCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, RegisterCrossAccountAccessRoleCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new RegisterCrossAccountAccessRoleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterCrossAccountAccessRoleCommandInput} for command's `input` shape.
 * @see {@link RegisterCrossAccountAccessRoleCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RegisterCrossAccountAccessRoleCommand = /** @class */ (function (_super) {
    __extends(RegisterCrossAccountAccessRoleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RegisterCrossAccountAccessRoleCommand(input) {
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
    RegisterCrossAccountAccessRoleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "InspectorClient";
        var commandName = "RegisterCrossAccountAccessRoleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RegisterCrossAccountAccessRoleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RegisterCrossAccountAccessRoleCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RegisterCrossAccountAccessRoleCommand(input, context);
    };
    RegisterCrossAccountAccessRoleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RegisterCrossAccountAccessRoleCommand(output, context);
    };
    return RegisterCrossAccountAccessRoleCommand;
}($Command));
export { RegisterCrossAccountAccessRoleCommand };
//# sourceMappingURL=RegisterCrossAccountAccessRoleCommand.js.map