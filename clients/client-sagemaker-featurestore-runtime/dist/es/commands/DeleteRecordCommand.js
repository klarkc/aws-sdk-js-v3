import { __extends } from "tslib";
import { DeleteRecordRequest } from "../models/models_0";
import { deserializeAws_restJson1DeleteRecordCommand, serializeAws_restJson1DeleteRecordCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a <code>Record</code> from a <code>FeatureGroup</code>. A new record will show
 *          up in the <code>OfflineStore</code> when the <code>DeleteRecord</code> API is called. This
 *          record will have a value of <code>True</code> in the <code>is_deleted</code> column.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerFeatureStoreRuntimeClient, DeleteRecordCommand } from "@aws-sdk/client-sagemaker-featurestore-runtime"; // ES Modules import
 * // const { SageMakerFeatureStoreRuntimeClient, DeleteRecordCommand } = require("@aws-sdk/client-sagemaker-featurestore-runtime"); // CommonJS import
 * const client = new SageMakerFeatureStoreRuntimeClient(config);
 * const command = new DeleteRecordCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRecordCommandInput} for command's `input` shape.
 * @see {@link DeleteRecordCommandOutput} for command's `response` shape.
 * @see {@link SageMakerFeatureStoreRuntimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteRecordCommand = /** @class */ (function (_super) {
    __extends(DeleteRecordCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteRecordCommand(input) {
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
    DeleteRecordCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerFeatureStoreRuntimeClient";
        var commandName = "DeleteRecordCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteRecordRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteRecordCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteRecordCommand(input, context);
    };
    DeleteRecordCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteRecordCommand(output, context);
    };
    return DeleteRecordCommand;
}($Command));
export { DeleteRecordCommand };
//# sourceMappingURL=DeleteRecordCommand.js.map