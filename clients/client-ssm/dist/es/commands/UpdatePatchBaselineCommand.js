import { __extends } from "tslib";
import { UpdatePatchBaselineRequest, UpdatePatchBaselineResult } from "../models/models_2";
import { deserializeAws_json1_1UpdatePatchBaselineCommand, serializeAws_json1_1UpdatePatchBaselineCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies an existing patch baseline. Fields not specified in the request are left
 *    unchanged.</p>
 *          <note>
 *             <p>For information about valid key and value pairs in <code>PatchFilters</code> for each
 *     supported operating system type, see <a href="http://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PatchFilter.html">PatchFilter</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdatePatchBaselineCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdatePatchBaselineCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new UpdatePatchBaselineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePatchBaselineCommandInput} for command's `input` shape.
 * @see {@link UpdatePatchBaselineCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdatePatchBaselineCommand = /** @class */ (function (_super) {
    __extends(UpdatePatchBaselineCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdatePatchBaselineCommand(input) {
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
    UpdatePatchBaselineCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "UpdatePatchBaselineCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdatePatchBaselineRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdatePatchBaselineResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdatePatchBaselineCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdatePatchBaselineCommand(input, context);
    };
    UpdatePatchBaselineCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdatePatchBaselineCommand(output, context);
    };
    return UpdatePatchBaselineCommand;
}($Command));
export { UpdatePatchBaselineCommand };
//# sourceMappingURL=UpdatePatchBaselineCommand.js.map