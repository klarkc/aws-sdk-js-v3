import { __extends } from "tslib";
import { DeleteDataSourceRequest } from "../models/models_0";
import { deserializeAws_json1_1DeleteDataSourceCommand, serializeAws_json1_1DeleteDataSourceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an Amazon Kendra data source. An exception is not thrown if the
 *       data source is already being deleted. While the data source is being
 *       deleted, the <code>Status</code> field returned by a call to the
 *         <code>DescribeDataSource</code> operation is set to
 *         <code>DELETING</code>. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/delete-data-source.html">Deleting Data Sources</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, DeleteDataSourceCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, DeleteDataSourceCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new DeleteDataSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDataSourceCommandInput} for command's `input` shape.
 * @see {@link DeleteDataSourceCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDataSourceCommand = /** @class */ (function (_super) {
    __extends(DeleteDataSourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteDataSourceCommand(input) {
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
    DeleteDataSourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KendraClient";
        var commandName = "DeleteDataSourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDataSourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDataSourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteDataSourceCommand(input, context);
    };
    DeleteDataSourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteDataSourceCommand(output, context);
    };
    return DeleteDataSourceCommand;
}($Command));
export { DeleteDataSourceCommand };
//# sourceMappingURL=DeleteDataSourceCommand.js.map