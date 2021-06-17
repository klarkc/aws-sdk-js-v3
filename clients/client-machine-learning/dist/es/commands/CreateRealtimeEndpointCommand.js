import { __extends } from "tslib";
import { CreateRealtimeEndpointInput, CreateRealtimeEndpointOutput } from "../models/models_0";
import { deserializeAws_json1_1CreateRealtimeEndpointCommand, serializeAws_json1_1CreateRealtimeEndpointCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a real-time endpoint for the <code>MLModel</code>. The endpoint contains the URI of the <code>MLModel</code>; that is, the location to send real-time prediction requests for the specified <code>MLModel</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, CreateRealtimeEndpointCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, CreateRealtimeEndpointCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const command = new CreateRealtimeEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRealtimeEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateRealtimeEndpointCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateRealtimeEndpointCommand = /** @class */ (function (_super) {
    __extends(CreateRealtimeEndpointCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateRealtimeEndpointCommand(input) {
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
    CreateRealtimeEndpointCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MachineLearningClient";
        var commandName = "CreateRealtimeEndpointCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateRealtimeEndpointInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateRealtimeEndpointOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateRealtimeEndpointCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateRealtimeEndpointCommand(input, context);
    };
    CreateRealtimeEndpointCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateRealtimeEndpointCommand(output, context);
    };
    return CreateRealtimeEndpointCommand;
}($Command));
export { CreateRealtimeEndpointCommand };
//# sourceMappingURL=CreateRealtimeEndpointCommand.js.map