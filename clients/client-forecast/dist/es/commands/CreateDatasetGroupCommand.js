import { __extends } from "tslib";
import { CreateDatasetGroupRequest, CreateDatasetGroupResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateDatasetGroupCommand, serializeAws_json1_1CreateDatasetGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a dataset group, which holds a collection of related datasets. You can add
 *       datasets to the dataset group when you create the dataset group, or later by using the <a>UpdateDatasetGroup</a> operation.</p>
 *          <p>After creating a dataset group and adding datasets, you use the dataset group when you
 *       create a predictor. For more information, see <a>howitworks-datasets-groups</a>.</p>
 *          <p>To get a list of all your datasets groups, use the <a>ListDatasetGroups</a>
 *       operation.</p>
 *          <note>
 *             <p>The <code>Status</code> of a dataset group must be <code>ACTIVE</code> before you can
 *         use the dataset group to create a predictor. To get the status, use the <a>DescribeDatasetGroup</a> operation.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, CreateDatasetGroupCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, CreateDatasetGroupCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new CreateDatasetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDatasetGroupCommandInput} for command's `input` shape.
 * @see {@link CreateDatasetGroupCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDatasetGroupCommand = /** @class */ (function (_super) {
    __extends(CreateDatasetGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDatasetGroupCommand(input) {
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
    CreateDatasetGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ForecastClient";
        var commandName = "CreateDatasetGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDatasetGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDatasetGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDatasetGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateDatasetGroupCommand(input, context);
    };
    CreateDatasetGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateDatasetGroupCommand(output, context);
    };
    return CreateDatasetGroupCommand;
}($Command));
export { CreateDatasetGroupCommand };
//# sourceMappingURL=CreateDatasetGroupCommand.js.map