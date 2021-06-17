import { __extends } from "tslib";
import { UpdateDataSourceInput, UpdateDataSourceOutput } from "../models/models_0";
import { deserializeAws_json1_1UpdateDataSourceCommand, serializeAws_json1_1UpdateDataSourceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the <code>DataSourceName</code> of a <code>DataSource</code>.</p>
 *         <p>You can use the <code>GetDataSource</code> operation to view the contents of the updated data element.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, UpdateDataSourceCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, UpdateDataSourceCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const command = new UpdateDataSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDataSourceCommandInput} for command's `input` shape.
 * @see {@link UpdateDataSourceCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDataSourceCommand = /** @class */ (function (_super) {
    __extends(UpdateDataSourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateDataSourceCommand(input) {
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
    UpdateDataSourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MachineLearningClient";
        var commandName = "UpdateDataSourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDataSourceInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateDataSourceOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDataSourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateDataSourceCommand(input, context);
    };
    UpdateDataSourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateDataSourceCommand(output, context);
    };
    return UpdateDataSourceCommand;
}($Command));
export { UpdateDataSourceCommand };
//# sourceMappingURL=UpdateDataSourceCommand.js.map