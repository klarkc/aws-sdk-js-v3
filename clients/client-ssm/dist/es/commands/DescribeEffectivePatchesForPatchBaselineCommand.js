import { __extends } from "tslib";
import { DescribeEffectivePatchesForPatchBaselineRequest, DescribeEffectivePatchesForPatchBaselineResult, } from "../models/models_0";
import { deserializeAws_json1_1DescribeEffectivePatchesForPatchBaselineCommand, serializeAws_json1_1DescribeEffectivePatchesForPatchBaselineCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the current effective patches (the patch and the approval state) for the specified
 *    patch baseline. Note that this API applies only to Windows patch baselines.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeEffectivePatchesForPatchBaselineCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeEffectivePatchesForPatchBaselineCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribeEffectivePatchesForPatchBaselineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEffectivePatchesForPatchBaselineCommandInput} for command's `input` shape.
 * @see {@link DescribeEffectivePatchesForPatchBaselineCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeEffectivePatchesForPatchBaselineCommand = /** @class */ (function (_super) {
    __extends(DescribeEffectivePatchesForPatchBaselineCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeEffectivePatchesForPatchBaselineCommand(input) {
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
    DescribeEffectivePatchesForPatchBaselineCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DescribeEffectivePatchesForPatchBaselineCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeEffectivePatchesForPatchBaselineRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeEffectivePatchesForPatchBaselineResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeEffectivePatchesForPatchBaselineCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeEffectivePatchesForPatchBaselineCommand(input, context);
    };
    DescribeEffectivePatchesForPatchBaselineCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeEffectivePatchesForPatchBaselineCommand(output, context);
    };
    return DescribeEffectivePatchesForPatchBaselineCommand;
}($Command));
export { DescribeEffectivePatchesForPatchBaselineCommand };
//# sourceMappingURL=DescribeEffectivePatchesForPatchBaselineCommand.js.map