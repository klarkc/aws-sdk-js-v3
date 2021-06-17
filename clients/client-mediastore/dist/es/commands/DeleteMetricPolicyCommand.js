import { __extends } from "tslib";
import { DeleteMetricPolicyInput, DeleteMetricPolicyOutput } from "../models/models_0";
import { deserializeAws_json1_1DeleteMetricPolicyCommand, serializeAws_json1_1DeleteMetricPolicyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the metric policy that is associated with the specified container. If there is no metric policy associated with the container, MediaStore doesn't send metrics to CloudWatch.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, DeleteMetricPolicyCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, DeleteMetricPolicyCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * const client = new MediaStoreClient(config);
 * const command = new DeleteMetricPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMetricPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteMetricPolicyCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteMetricPolicyCommand = /** @class */ (function (_super) {
    __extends(DeleteMetricPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteMetricPolicyCommand(input) {
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
    DeleteMetricPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaStoreClient";
        var commandName = "DeleteMetricPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteMetricPolicyInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteMetricPolicyOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteMetricPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteMetricPolicyCommand(input, context);
    };
    DeleteMetricPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteMetricPolicyCommand(output, context);
    };
    return DeleteMetricPolicyCommand;
}($Command));
export { DeleteMetricPolicyCommand };
//# sourceMappingURL=DeleteMetricPolicyCommand.js.map