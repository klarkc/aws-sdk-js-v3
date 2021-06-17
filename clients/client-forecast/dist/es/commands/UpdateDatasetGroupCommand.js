import { __extends } from "tslib";
import { UpdateDatasetGroupRequest, UpdateDatasetGroupResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateDatasetGroupCommand, serializeAws_json1_1UpdateDatasetGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Replaces the datasets in a dataset group with the specified datasets.</p>
 *          <note>
 *             <p>The <code>Status</code> of the dataset group must be <code>ACTIVE</code> before you can
 *         use the dataset group to create a predictor. Use the <a>DescribeDatasetGroup</a>
 *         operation to get the status.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, UpdateDatasetGroupCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, UpdateDatasetGroupCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new UpdateDatasetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDatasetGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateDatasetGroupCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDatasetGroupCommand = /** @class */ (function (_super) {
    __extends(UpdateDatasetGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateDatasetGroupCommand(input) {
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
    UpdateDatasetGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ForecastClient";
        var commandName = "UpdateDatasetGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDatasetGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateDatasetGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDatasetGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateDatasetGroupCommand(input, context);
    };
    UpdateDatasetGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateDatasetGroupCommand(output, context);
    };
    return UpdateDatasetGroupCommand;
}($Command));
export { UpdateDatasetGroupCommand };
//# sourceMappingURL=UpdateDatasetGroupCommand.js.map