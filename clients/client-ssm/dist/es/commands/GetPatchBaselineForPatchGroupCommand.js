import { __extends } from "tslib";
import { GetPatchBaselineForPatchGroupRequest, GetPatchBaselineForPatchGroupResult } from "../models/models_1";
import { deserializeAws_json1_1GetPatchBaselineForPatchGroupCommand, serializeAws_json1_1GetPatchBaselineForPatchGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the patch baseline that should be used for the specified patch group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetPatchBaselineForPatchGroupCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetPatchBaselineForPatchGroupCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetPatchBaselineForPatchGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPatchBaselineForPatchGroupCommandInput} for command's `input` shape.
 * @see {@link GetPatchBaselineForPatchGroupCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetPatchBaselineForPatchGroupCommand = /** @class */ (function (_super) {
    __extends(GetPatchBaselineForPatchGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetPatchBaselineForPatchGroupCommand(input) {
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
    GetPatchBaselineForPatchGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "GetPatchBaselineForPatchGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetPatchBaselineForPatchGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetPatchBaselineForPatchGroupResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetPatchBaselineForPatchGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetPatchBaselineForPatchGroupCommand(input, context);
    };
    GetPatchBaselineForPatchGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetPatchBaselineForPatchGroupCommand(output, context);
    };
    return GetPatchBaselineForPatchGroupCommand;
}($Command));
export { GetPatchBaselineForPatchGroupCommand };
//# sourceMappingURL=GetPatchBaselineForPatchGroupCommand.js.map