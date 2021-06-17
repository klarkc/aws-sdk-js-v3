import { __extends } from "tslib";
import { UpdateEndpointInput, UpdateEndpointOutput } from "../models/models_2";
import { deserializeAws_json1_1UpdateEndpointCommand, serializeAws_json1_1UpdateEndpointCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deploys the new <code>EndpointConfig</code> specified in the request, switches to
 *             using newly created endpoint, and then deletes resources provisioned for the endpoint
 *             using the previous <code>EndpointConfig</code> (there is no availability loss). </p>
 *         <p>When Amazon SageMaker receives the request, it sets the endpoint status to
 *                 <code>Updating</code>. After updating the endpoint, it sets the status to
 *                 <code>InService</code>. To check the status of an endpoint, use the <a>DescribeEndpoint</a> API.
 *
 *         </p>
 *         <note>
 *             <p>You must not delete an <code>EndpointConfig</code> in use by an endpoint that is
 *                 live or while the <code>UpdateEndpoint</code> or <code>CreateEndpoint</code>
 *                 operations are being performed on the endpoint. To update an endpoint, you must
 *                 create a new <code>EndpointConfig</code>.</p>
 *             <p>If you delete the <code>EndpointConfig</code> of an endpoint that is active or
 *                 being created or updated you may lose visibility into the instance type the endpoint
 *                 is using. The endpoint must be deleted in order to stop incurring charges.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateEndpointCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateEndpointCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new UpdateEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateEndpointCommandInput} for command's `input` shape.
 * @see {@link UpdateEndpointCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateEndpointCommand = /** @class */ (function (_super) {
    __extends(UpdateEndpointCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateEndpointCommand(input) {
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
    UpdateEndpointCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "UpdateEndpointCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateEndpointInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateEndpointOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateEndpointCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateEndpointCommand(input, context);
    };
    UpdateEndpointCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateEndpointCommand(output, context);
    };
    return UpdateEndpointCommand;
}($Command));
export { UpdateEndpointCommand };
//# sourceMappingURL=UpdateEndpointCommand.js.map