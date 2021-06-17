import { __extends } from "tslib";
import { DeletePatchBaselineRequest, DeletePatchBaselineResult } from "../models/models_0";
import { deserializeAws_json1_1DeletePatchBaselineCommand, serializeAws_json1_1DeletePatchBaselineCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a patch baseline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeletePatchBaselineCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeletePatchBaselineCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DeletePatchBaselineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePatchBaselineCommandInput} for command's `input` shape.
 * @see {@link DeletePatchBaselineCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeletePatchBaselineCommand = /** @class */ (function (_super) {
    __extends(DeletePatchBaselineCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeletePatchBaselineCommand(input) {
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
    DeletePatchBaselineCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DeletePatchBaselineCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeletePatchBaselineRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeletePatchBaselineResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeletePatchBaselineCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeletePatchBaselineCommand(input, context);
    };
    DeletePatchBaselineCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeletePatchBaselineCommand(output, context);
    };
    return DeletePatchBaselineCommand;
}($Command));
export { DeletePatchBaselineCommand };
//# sourceMappingURL=DeletePatchBaselineCommand.js.map