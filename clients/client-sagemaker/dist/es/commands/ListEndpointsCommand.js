import { __extends } from "tslib";
import { ListEndpointsInput, ListEndpointsOutput } from "../models/models_2";
import { deserializeAws_json1_1ListEndpointsCommand, serializeAws_json1_1ListEndpointsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists endpoints.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListEndpointsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListEndpointsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListEndpointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEndpointsCommandInput} for command's `input` shape.
 * @see {@link ListEndpointsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListEndpointsCommand = /** @class */ (function (_super) {
    __extends(ListEndpointsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListEndpointsCommand(input) {
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
    ListEndpointsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "ListEndpointsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListEndpointsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListEndpointsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListEndpointsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListEndpointsCommand(input, context);
    };
    ListEndpointsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListEndpointsCommand(output, context);
    };
    return ListEndpointsCommand;
}($Command));
export { ListEndpointsCommand };
//# sourceMappingURL=ListEndpointsCommand.js.map