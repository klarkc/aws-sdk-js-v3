import { __extends } from "tslib";
import { DeleteDataSourceInput, DeleteDataSourceOutput } from "../models/models_0";
import { deserializeAws_json1_1DeleteDataSourceCommand, serializeAws_json1_1DeleteDataSourceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Assigns the DELETED status to a <code>DataSource</code>, rendering it unusable.</p>
 *         <p>After using the <code>DeleteDataSource</code> operation, you can use the <a>GetDataSource</a> operation to verify that the status of the <code>DataSource</code> changed to DELETED.</p>
 *         <p>
 *             <b>Caution:</b> The results of the <code>DeleteDataSource</code> operation are irreversible.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, DeleteDataSourceCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, DeleteDataSourceCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const command = new DeleteDataSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDataSourceCommandInput} for command's `input` shape.
 * @see {@link DeleteDataSourceCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "MachineLearningClient";
        var commandName = "DeleteDataSourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDataSourceInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteDataSourceOutput.filterSensitiveLog,
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