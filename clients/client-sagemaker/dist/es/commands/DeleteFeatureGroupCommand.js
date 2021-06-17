import { __extends } from "tslib";
import { DeleteFeatureGroupRequest } from "../models/models_1";
import { deserializeAws_json1_1DeleteFeatureGroupCommand, serializeAws_json1_1DeleteFeatureGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Delete the <code>FeatureGroup</code> and any data that was written to the
 *             <code>OnlineStore</code> of the <code>FeatureGroup</code>. Data cannot be accessed from
 *          the <code>OnlineStore</code> immediately after <code>DeleteFeatureGroup</code> is called. </p>
 *          <p>Data written into the <code>OfflineStore</code> will not be deleted. The AWS Glue
 *          database and tables that are automatically created for your <code>OfflineStore</code> are
 *          not deleted. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteFeatureGroupCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteFeatureGroupCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteFeatureGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFeatureGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteFeatureGroupCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteFeatureGroupCommand = /** @class */ (function (_super) {
    __extends(DeleteFeatureGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteFeatureGroupCommand(input) {
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
    DeleteFeatureGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DeleteFeatureGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteFeatureGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteFeatureGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteFeatureGroupCommand(input, context);
    };
    DeleteFeatureGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteFeatureGroupCommand(output, context);
    };
    return DeleteFeatureGroupCommand;
}($Command));
export { DeleteFeatureGroupCommand };
//# sourceMappingURL=DeleteFeatureGroupCommand.js.map