import { __extends } from "tslib";
import { GetDefaultPatchBaselineRequest, GetDefaultPatchBaselineResult } from "../models/models_1";
import { deserializeAws_json1_1GetDefaultPatchBaselineCommand, serializeAws_json1_1GetDefaultPatchBaselineCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the default patch baseline. Note that Systems Manager supports creating multiple default
 *    patch baselines. For example, you can create a default patch baseline for each operating
 *    system.</p>
 *          <p>If you do not specify an operating system value, the default patch baseline for Windows is
 *    returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetDefaultPatchBaselineCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetDefaultPatchBaselineCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetDefaultPatchBaselineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDefaultPatchBaselineCommandInput} for command's `input` shape.
 * @see {@link GetDefaultPatchBaselineCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDefaultPatchBaselineCommand = /** @class */ (function (_super) {
    __extends(GetDefaultPatchBaselineCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDefaultPatchBaselineCommand(input) {
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
    GetDefaultPatchBaselineCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "GetDefaultPatchBaselineCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDefaultPatchBaselineRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDefaultPatchBaselineResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDefaultPatchBaselineCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetDefaultPatchBaselineCommand(input, context);
    };
    GetDefaultPatchBaselineCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetDefaultPatchBaselineCommand(output, context);
    };
    return GetDefaultPatchBaselineCommand;
}($Command));
export { GetDefaultPatchBaselineCommand };
//# sourceMappingURL=GetDefaultPatchBaselineCommand.js.map