import { __extends } from "tslib";
import { UpdateDatasetEntriesRequest, UpdateDatasetEntriesResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateDatasetEntriesCommand, serializeAws_restJson1UpdateDatasetEntriesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds one or more JSON Line entries to a dataset. A JSON Line includes information about an image
 *          used for training or testing an Amazon Lookout for Vision model. The following is an example JSON Line.</p>
 *
 *
 *          <p>Updating a dataset might take a while to complete. To check the current status, call <a>DescribeDataset</a> and
 *          check the <code>Status</code> field in the response.</p>
 *          <p>This operation requires permissions to perform the
 *          <code>lookoutvision:UpdateDatasetEntries</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutVisionClient, UpdateDatasetEntriesCommand } from "@aws-sdk/client-lookoutvision"; // ES Modules import
 * // const { LookoutVisionClient, UpdateDatasetEntriesCommand } = require("@aws-sdk/client-lookoutvision"); // CommonJS import
 * const client = new LookoutVisionClient(config);
 * const command = new UpdateDatasetEntriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDatasetEntriesCommandInput} for command's `input` shape.
 * @see {@link UpdateDatasetEntriesCommandOutput} for command's `response` shape.
 * @see {@link LookoutVisionClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDatasetEntriesCommand = /** @class */ (function (_super) {
    __extends(UpdateDatasetEntriesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateDatasetEntriesCommand(input) {
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
    UpdateDatasetEntriesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LookoutVisionClient";
        var commandName = "UpdateDatasetEntriesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDatasetEntriesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateDatasetEntriesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDatasetEntriesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateDatasetEntriesCommand(input, context);
    };
    UpdateDatasetEntriesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateDatasetEntriesCommand(output, context);
    };
    return UpdateDatasetEntriesCommand;
}($Command));
export { UpdateDatasetEntriesCommand };
//# sourceMappingURL=UpdateDatasetEntriesCommand.js.map