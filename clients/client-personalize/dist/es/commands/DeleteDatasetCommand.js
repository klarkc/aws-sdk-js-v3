import { __extends } from "tslib";
import { DeleteDatasetRequest } from "../models/models_0";
import { deserializeAws_json1_1DeleteDatasetCommand, serializeAws_json1_1DeleteDatasetCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a dataset. You can't delete a dataset if an associated
 *         <code>DatasetImportJob</code> or <code>SolutionVersion</code> is in the CREATE PENDING or IN
 *       PROGRESS state. For more information on datasets, see <a>CreateDataset</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DeleteDatasetCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DeleteDatasetCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new DeleteDatasetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDatasetCommandInput} for command's `input` shape.
 * @see {@link DeleteDatasetCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDatasetCommand = /** @class */ (function (_super) {
    __extends(DeleteDatasetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteDatasetCommand(input) {
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
    DeleteDatasetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PersonalizeClient";
        var commandName = "DeleteDatasetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDatasetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDatasetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteDatasetCommand(input, context);
    };
    DeleteDatasetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteDatasetCommand(output, context);
    };
    return DeleteDatasetCommand;
}($Command));
export { DeleteDatasetCommand };
//# sourceMappingURL=DeleteDatasetCommand.js.map