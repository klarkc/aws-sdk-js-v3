import { __extends } from "tslib";
import { CreatePatchBaselineRequest, CreatePatchBaselineResult } from "../models/models_0";
import { deserializeAws_json1_1CreatePatchBaselineCommand, serializeAws_json1_1CreatePatchBaselineCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a patch baseline.</p>
 *          <note>
 *             <p>For information about valid key and value pairs in <code>PatchFilters</code> for each
 *     supported operating system type, see <a href="http://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PatchFilter.html">PatchFilter</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, CreatePatchBaselineCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, CreatePatchBaselineCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new CreatePatchBaselineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePatchBaselineCommandInput} for command's `input` shape.
 * @see {@link CreatePatchBaselineCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreatePatchBaselineCommand = /** @class */ (function (_super) {
    __extends(CreatePatchBaselineCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreatePatchBaselineCommand(input) {
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
    CreatePatchBaselineCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "CreatePatchBaselineCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreatePatchBaselineRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreatePatchBaselineResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreatePatchBaselineCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreatePatchBaselineCommand(input, context);
    };
    CreatePatchBaselineCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreatePatchBaselineCommand(output, context);
    };
    return CreatePatchBaselineCommand;
}($Command));
export { CreatePatchBaselineCommand };
//# sourceMappingURL=CreatePatchBaselineCommand.js.map