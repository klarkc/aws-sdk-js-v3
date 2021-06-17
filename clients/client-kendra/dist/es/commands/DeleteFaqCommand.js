import { __extends } from "tslib";
import { DeleteFaqRequest } from "../models/models_0";
import { deserializeAws_json1_1DeleteFaqCommand, serializeAws_json1_1DeleteFaqCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes an FAQ from an index.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, DeleteFaqCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, DeleteFaqCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new DeleteFaqCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFaqCommandInput} for command's `input` shape.
 * @see {@link DeleteFaqCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteFaqCommand = /** @class */ (function (_super) {
    __extends(DeleteFaqCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteFaqCommand(input) {
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
    DeleteFaqCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KendraClient";
        var commandName = "DeleteFaqCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteFaqRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteFaqCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteFaqCommand(input, context);
    };
    DeleteFaqCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteFaqCommand(output, context);
    };
    return DeleteFaqCommand;
}($Command));
export { DeleteFaqCommand };
//# sourceMappingURL=DeleteFaqCommand.js.map