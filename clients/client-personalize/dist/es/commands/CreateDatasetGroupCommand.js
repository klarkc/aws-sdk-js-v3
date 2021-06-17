import { __extends } from "tslib";
import { CreateDatasetGroupRequest, CreateDatasetGroupResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateDatasetGroupCommand, serializeAws_json1_1CreateDatasetGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an empty dataset group. A dataset group contains related datasets that supply data
 *       for training a model. A dataset group can contain at most three datasets, one for each type of
 *       dataset:</p>
 *          <ul>
 *             <li>
 *                <p>Interactions</p>
 *             </li>
 *             <li>
 *                <p>Items</p>
 *             </li>
 *             <li>
 *                <p>Users</p>
 *             </li>
 *          </ul>
 *          <p>To train a model (create a solution), a dataset group that contains an
 *         <code>Interactions</code> dataset is required. Call <a>CreateDataset</a> to add a
 *       dataset to the group.</p>
 *          <p>A dataset group can be in one of the following states:</p>
 *          <ul>
 *             <li>
 *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
 *             </li>
 *             <li>
 *                <p>DELETE PENDING</p>
 *             </li>
 *          </ul>
 *          <p>To get the status of the dataset group, call <a>DescribeDatasetGroup</a>. If
 *       the status shows as CREATE FAILED, the response includes a <code>failureReason</code> key,
 *       which describes why the creation failed.</p>
 *          <note>
 *             <p>You must wait until the <code>status</code> of the dataset group is <code>ACTIVE</code>
 *         before adding a dataset to the group.</p>
 *          </note>
 *          <p>You can specify an AWS Key Management Service (KMS) key to encrypt the datasets in the group. If you
 *       specify a KMS key, you must also include an AWS Identity and Access Management (IAM) role that has permission to
 *       access the key.</p>
 *          <p class="title">
 *             <b>APIs that require a dataset group ARN in the request</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateDataset</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>CreateEventTracker</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>CreateSolution</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p class="title">
 *             <b>Related APIs</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>ListDatasetGroups</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeDatasetGroup</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteDatasetGroup</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, CreateDatasetGroupCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, CreateDatasetGroupCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new CreateDatasetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDatasetGroupCommandInput} for command's `input` shape.
 * @see {@link CreateDatasetGroupCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "PersonalizeClient";
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