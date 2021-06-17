import { __extends } from "tslib";
import { ListDatasetEntriesRequest, ListDatasetEntriesResponse } from "../models/models_0";
import { deserializeAws_restJson1ListDatasetEntriesCommand, serializeAws_restJson1ListDatasetEntriesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the JSON Lines within a dataset. An Amazon Lookout for Vision JSON Line contains the anomaly
 *       information for a single image, including the image location and the assigned label.</p>
 *          <p>This operation requires permissions to perform the
 *          <code>lookoutvision:ListDatasetEntries</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutVisionClient, ListDatasetEntriesCommand } from "@aws-sdk/client-lookoutvision"; // ES Modules import
 * // const { LookoutVisionClient, ListDatasetEntriesCommand } = require("@aws-sdk/client-lookoutvision"); // CommonJS import
 * const client = new LookoutVisionClient(config);
 * const command = new ListDatasetEntriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDatasetEntriesCommandInput} for command's `input` shape.
 * @see {@link ListDatasetEntriesCommandOutput} for command's `response` shape.
 * @see {@link LookoutVisionClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDatasetEntriesCommand = /** @class */ (function (_super) {
    __extends(ListDatasetEntriesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDatasetEntriesCommand(input) {
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
    ListDatasetEntriesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LookoutVisionClient";
        var commandName = "ListDatasetEntriesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDatasetEntriesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDatasetEntriesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDatasetEntriesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListDatasetEntriesCommand(input, context);
    };
    ListDatasetEntriesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListDatasetEntriesCommand(output, context);
    };
    return ListDatasetEntriesCommand;
}($Command));
export { ListDatasetEntriesCommand };
//# sourceMappingURL=ListDatasetEntriesCommand.js.map