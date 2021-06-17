import { __extends } from "tslib";
import { DeleteDatasetRequest, DeleteDatasetResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteDatasetCommand, serializeAws_restJson1DeleteDatasetCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a dataset from DataBrew.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, DeleteDatasetCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, DeleteDatasetCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new DeleteDatasetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDatasetCommandInput} for command's `input` shape.
 * @see {@link DeleteDatasetCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "DataBrewClient";
        var commandName = "DeleteDatasetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDatasetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteDatasetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDatasetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteDatasetCommand(input, context);
    };
    DeleteDatasetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteDatasetCommand(output, context);
    };
    return DeleteDatasetCommand;
}($Command));
export { DeleteDatasetCommand };
//# sourceMappingURL=DeleteDatasetCommand.js.map