import { __extends } from "tslib";
import { DeleteIndexRequest } from "../models/models_0";
import { deserializeAws_json1_1DeleteIndexCommand, serializeAws_json1_1DeleteIndexCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an existing Amazon Kendra index. An exception is not thrown if
 *       the index is already being deleted. While the index is being deleted, the
 *         <code>Status</code> field returned by a call to the
 *         <code>DescribeIndex</code> operation is set to
 *       <code>DELETING</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, DeleteIndexCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, DeleteIndexCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new DeleteIndexCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteIndexCommandInput} for command's `input` shape.
 * @see {@link DeleteIndexCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteIndexCommand = /** @class */ (function (_super) {
    __extends(DeleteIndexCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteIndexCommand(input) {
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
    DeleteIndexCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KendraClient";
        var commandName = "DeleteIndexCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteIndexRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteIndexCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteIndexCommand(input, context);
    };
    DeleteIndexCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteIndexCommand(output, context);
    };
    return DeleteIndexCommand;
}($Command));
export { DeleteIndexCommand };
//# sourceMappingURL=DeleteIndexCommand.js.map