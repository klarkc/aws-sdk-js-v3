import { __extends } from "tslib";
import { RegisterDefaultPatchBaselineRequest, RegisterDefaultPatchBaselineResult } from "../models/models_1";
import { deserializeAws_json1_1RegisterDefaultPatchBaselineCommand, serializeAws_json1_1RegisterDefaultPatchBaselineCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Defines the default patch baseline for the relevant operating system.</p>
 *          <p>To reset the AWS predefined patch baseline as the default, specify the full patch baseline
 *    ARN as the baseline ID value. For example, for CentOS, specify
 *     <code>arn:aws:ssm:us-east-2:733109147000:patchbaseline/pb-0574b43a65ea646ed</code> instead of
 *     <code>pb-0574b43a65ea646ed</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, RegisterDefaultPatchBaselineCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, RegisterDefaultPatchBaselineCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new RegisterDefaultPatchBaselineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterDefaultPatchBaselineCommandInput} for command's `input` shape.
 * @see {@link RegisterDefaultPatchBaselineCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RegisterDefaultPatchBaselineCommand = /** @class */ (function (_super) {
    __extends(RegisterDefaultPatchBaselineCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RegisterDefaultPatchBaselineCommand(input) {
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
    RegisterDefaultPatchBaselineCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "RegisterDefaultPatchBaselineCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RegisterDefaultPatchBaselineRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RegisterDefaultPatchBaselineResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RegisterDefaultPatchBaselineCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RegisterDefaultPatchBaselineCommand(input, context);
    };
    RegisterDefaultPatchBaselineCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RegisterDefaultPatchBaselineCommand(output, context);
    };
    return RegisterDefaultPatchBaselineCommand;
}($Command));
export { RegisterDefaultPatchBaselineCommand };
//# sourceMappingURL=RegisterDefaultPatchBaselineCommand.js.map