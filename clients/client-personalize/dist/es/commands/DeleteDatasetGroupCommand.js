import { __extends } from "tslib";
import { DeleteDatasetGroupRequest } from "../models/models_0";
import { deserializeAws_json1_1DeleteDatasetGroupCommand, serializeAws_json1_1DeleteDatasetGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a dataset group. Before you delete a dataset group, you must delete the
 *       following:</p>
 *          <ul>
 *             <li>
 *                <p>All associated event trackers.</p>
 *             </li>
 *             <li>
 *                <p>All associated solutions.</p>
 *             </li>
 *             <li>
 *                <p>All datasets in the dataset group.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DeleteDatasetGroupCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DeleteDatasetGroupCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new DeleteDatasetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDatasetGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteDatasetGroupCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDatasetGroupCommand = /** @class */ (function (_super) {
    __extends(DeleteDatasetGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteDatasetGroupCommand(input) {
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
    DeleteDatasetGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PersonalizeClient";
        var commandName = "DeleteDatasetGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDatasetGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDatasetGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteDatasetGroupCommand(input, context);
    };
    DeleteDatasetGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteDatasetGroupCommand(output, context);
    };
    return DeleteDatasetGroupCommand;
}($Command));
export { DeleteDatasetGroupCommand };
//# sourceMappingURL=DeleteDatasetGroupCommand.js.map