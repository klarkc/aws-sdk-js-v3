import { __extends } from "tslib";
import { RegisterPatchBaselineForPatchGroupRequest, RegisterPatchBaselineForPatchGroupResult, } from "../models/models_1";
import { deserializeAws_json1_1RegisterPatchBaselineForPatchGroupCommand, serializeAws_json1_1RegisterPatchBaselineForPatchGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Registers a patch baseline for a patch group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, RegisterPatchBaselineForPatchGroupCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, RegisterPatchBaselineForPatchGroupCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new RegisterPatchBaselineForPatchGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterPatchBaselineForPatchGroupCommandInput} for command's `input` shape.
 * @see {@link RegisterPatchBaselineForPatchGroupCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RegisterPatchBaselineForPatchGroupCommand = /** @class */ (function (_super) {
    __extends(RegisterPatchBaselineForPatchGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RegisterPatchBaselineForPatchGroupCommand(input) {
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
    RegisterPatchBaselineForPatchGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "RegisterPatchBaselineForPatchGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RegisterPatchBaselineForPatchGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RegisterPatchBaselineForPatchGroupResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RegisterPatchBaselineForPatchGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RegisterPatchBaselineForPatchGroupCommand(input, context);
    };
    RegisterPatchBaselineForPatchGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RegisterPatchBaselineForPatchGroupCommand(output, context);
    };
    return RegisterPatchBaselineForPatchGroupCommand;
}($Command));
export { RegisterPatchBaselineForPatchGroupCommand };
//# sourceMappingURL=RegisterPatchBaselineForPatchGroupCommand.js.map