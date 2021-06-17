import { __extends } from "tslib";
import { DeleteResourceRequest, DeleteResourceResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteResourceCommand, serializeAws_json1_1DeleteResourceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified resource. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, DeleteResourceCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, DeleteResourceCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new DeleteResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteResourceCommandInput} for command's `input` shape.
 * @see {@link DeleteResourceCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteResourceCommand = /** @class */ (function (_super) {
    __extends(DeleteResourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteResourceCommand(input) {
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
    DeleteResourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkMailClient";
        var commandName = "DeleteResourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteResourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteResourceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteResourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteResourceCommand(input, context);
    };
    DeleteResourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteResourceCommand(output, context);
    };
    return DeleteResourceCommand;
}($Command));
export { DeleteResourceCommand };
//# sourceMappingURL=DeleteResourceCommand.js.map