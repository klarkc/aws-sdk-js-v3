import { __extends } from "tslib";
import { DeleteEndpointConfigInput } from "../models/models_1";
import { deserializeAws_json1_1DeleteEndpointConfigCommand, serializeAws_json1_1DeleteEndpointConfigCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an endpoint configuration. The <code>DeleteEndpointConfig</code> API
 *             deletes only the specified configuration. It does not delete endpoints created using the
 *             configuration. </p>
 *         <p>You must not delete an <code>EndpointConfig</code> in use by an endpoint that is
 *             live or while the <code>UpdateEndpoint</code> or <code>CreateEndpoint</code> operations
 *             are being performed on the endpoint. If you delete the <code>EndpointConfig</code> of an
 *             endpoint that is active or being created or updated you may lose visibility into the
 *             instance type the endpoint is using. The endpoint must be deleted in order to stop
 *             incurring charges.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteEndpointConfigCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteEndpointConfigCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteEndpointConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteEndpointConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteEndpointConfigCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteEndpointConfigCommand = /** @class */ (function (_super) {
    __extends(DeleteEndpointConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteEndpointConfigCommand(input) {
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
    DeleteEndpointConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DeleteEndpointConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteEndpointConfigInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteEndpointConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteEndpointConfigCommand(input, context);
    };
    DeleteEndpointConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteEndpointConfigCommand(output, context);
    };
    return DeleteEndpointConfigCommand;
}($Command));
export { DeleteEndpointConfigCommand };
//# sourceMappingURL=DeleteEndpointConfigCommand.js.map