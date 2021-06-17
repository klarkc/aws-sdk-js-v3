import { __extends } from "tslib";
import { GetPatchBaselineRequest, GetPatchBaselineResult } from "../models/models_1";
import { deserializeAws_json1_1GetPatchBaselineCommand, serializeAws_json1_1GetPatchBaselineCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about a patch baseline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetPatchBaselineCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetPatchBaselineCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetPatchBaselineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPatchBaselineCommandInput} for command's `input` shape.
 * @see {@link GetPatchBaselineCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetPatchBaselineCommand = /** @class */ (function (_super) {
    __extends(GetPatchBaselineCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetPatchBaselineCommand(input) {
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
    GetPatchBaselineCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "GetPatchBaselineCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetPatchBaselineRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetPatchBaselineResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetPatchBaselineCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetPatchBaselineCommand(input, context);
    };
    GetPatchBaselineCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetPatchBaselineCommand(output, context);
    };
    return GetPatchBaselineCommand;
}($Command));
export { GetPatchBaselineCommand };
//# sourceMappingURL=GetPatchBaselineCommand.js.map