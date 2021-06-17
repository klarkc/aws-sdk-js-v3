import { __extends } from "tslib";
import { DeleteEndpointInput } from "../models/models_1";
import { deserializeAws_json1_1DeleteEndpointCommand, serializeAws_json1_1DeleteEndpointCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an endpoint. Amazon SageMaker frees up all of the resources that were deployed when the
 *             endpoint was created. </p>
 *         <p>Amazon SageMaker retires any custom KMS key grants associated with the endpoint, meaning you don't
 *             need to use the <a href="http://docs.aws.amazon.com/kms/latest/APIReference/API_RevokeGrant.html">RevokeGrant</a> API call.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteEndpointCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteEndpointCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteEndpointCommandInput} for command's `input` shape.
 * @see {@link DeleteEndpointCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteEndpointCommand = /** @class */ (function (_super) {
    __extends(DeleteEndpointCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteEndpointCommand(input) {
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
    DeleteEndpointCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DeleteEndpointCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteEndpointInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteEndpointCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteEndpointCommand(input, context);
    };
    DeleteEndpointCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteEndpointCommand(output, context);
    };
    return DeleteEndpointCommand;
}($Command));
export { DeleteEndpointCommand };
//# sourceMappingURL=DeleteEndpointCommand.js.map