import { __extends } from "tslib";
import { DeregisterPatchBaselineForPatchGroupRequest, DeregisterPatchBaselineForPatchGroupResult, } from "../models/models_0";
import { deserializeAws_json1_1DeregisterPatchBaselineForPatchGroupCommand, serializeAws_json1_1DeregisterPatchBaselineForPatchGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes a patch group from a patch baseline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeregisterPatchBaselineForPatchGroupCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeregisterPatchBaselineForPatchGroupCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DeregisterPatchBaselineForPatchGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterPatchBaselineForPatchGroupCommandInput} for command's `input` shape.
 * @see {@link DeregisterPatchBaselineForPatchGroupCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeregisterPatchBaselineForPatchGroupCommand = /** @class */ (function (_super) {
    __extends(DeregisterPatchBaselineForPatchGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeregisterPatchBaselineForPatchGroupCommand(input) {
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
    DeregisterPatchBaselineForPatchGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DeregisterPatchBaselineForPatchGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeregisterPatchBaselineForPatchGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeregisterPatchBaselineForPatchGroupResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeregisterPatchBaselineForPatchGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeregisterPatchBaselineForPatchGroupCommand(input, context);
    };
    DeregisterPatchBaselineForPatchGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeregisterPatchBaselineForPatchGroupCommand(output, context);
    };
    return DeregisterPatchBaselineForPatchGroupCommand;
}($Command));
export { DeregisterPatchBaselineForPatchGroupCommand };
//# sourceMappingURL=DeregisterPatchBaselineForPatchGroupCommand.js.map