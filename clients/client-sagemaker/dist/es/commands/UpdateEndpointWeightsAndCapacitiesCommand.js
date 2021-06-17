import { __extends } from "tslib";
import { UpdateEndpointWeightsAndCapacitiesInput, UpdateEndpointWeightsAndCapacitiesOutput } from "../models/models_2";
import { deserializeAws_json1_1UpdateEndpointWeightsAndCapacitiesCommand, serializeAws_json1_1UpdateEndpointWeightsAndCapacitiesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates variant weight of one or more variants associated with an existing
 *             endpoint, or capacity of one variant associated with an existing endpoint. When it
 *             receives the request, Amazon SageMaker sets the endpoint status to <code>Updating</code>. After
 *             updating the endpoint, it sets the status to <code>InService</code>. To check the status
 *             of an endpoint, use the <a>DescribeEndpoint</a> API. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateEndpointWeightsAndCapacitiesCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateEndpointWeightsAndCapacitiesCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new UpdateEndpointWeightsAndCapacitiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateEndpointWeightsAndCapacitiesCommandInput} for command's `input` shape.
 * @see {@link UpdateEndpointWeightsAndCapacitiesCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateEndpointWeightsAndCapacitiesCommand = /** @class */ (function (_super) {
    __extends(UpdateEndpointWeightsAndCapacitiesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateEndpointWeightsAndCapacitiesCommand(input) {
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
    UpdateEndpointWeightsAndCapacitiesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "UpdateEndpointWeightsAndCapacitiesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateEndpointWeightsAndCapacitiesInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateEndpointWeightsAndCapacitiesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateEndpointWeightsAndCapacitiesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateEndpointWeightsAndCapacitiesCommand(input, context);
    };
    UpdateEndpointWeightsAndCapacitiesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateEndpointWeightsAndCapacitiesCommand(output, context);
    };
    return UpdateEndpointWeightsAndCapacitiesCommand;
}($Command));
export { UpdateEndpointWeightsAndCapacitiesCommand };
//# sourceMappingURL=UpdateEndpointWeightsAndCapacitiesCommand.js.map