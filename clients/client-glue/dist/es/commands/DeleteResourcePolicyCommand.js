import { __extends } from "tslib";
import { DeleteResourcePolicyRequest, DeleteResourcePolicyResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteResourcePolicyCommand, serializeAws_json1_1DeleteResourcePolicyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a specified policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteResourcePolicyCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteResourcePolicyCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new DeleteResourcePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteResourcePolicyCommand = /** @class */ (function (_super) {
    __extends(DeleteResourcePolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteResourcePolicyCommand(input) {
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
    DeleteResourcePolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "DeleteResourcePolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteResourcePolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteResourcePolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteResourcePolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteResourcePolicyCommand(input, context);
    };
    DeleteResourcePolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteResourcePolicyCommand(output, context);
    };
    return DeleteResourcePolicyCommand;
}($Command));
export { DeleteResourcePolicyCommand };
//# sourceMappingURL=DeleteResourcePolicyCommand.js.map