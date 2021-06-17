import { __extends } from "tslib";
import { PredictInput, PredictOutput } from "../models/models_0";
import { deserializeAws_json1_1PredictCommand, serializeAws_json1_1PredictCommand } from "../protocols/Aws_json1_1";
import { getPredictEndpointPlugin } from "@aws-sdk/middleware-sdk-machinelearning";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Generates a prediction for the observation using the specified <code>ML Model</code>.</p>
 *         <p>
 *             <b>Note:</b> Not all response parameters will be populated. Whether a
 *           response parameter is populated depends on the type of model requested.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, PredictCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, PredictCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const command = new PredictCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PredictCommandInput} for command's `input` shape.
 * @see {@link PredictCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PredictCommand = /** @class */ (function (_super) {
    __extends(PredictCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PredictCommand(input) {
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
    PredictCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getPredictEndpointPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MachineLearningClient";
        var commandName = "PredictCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PredictInput.filterSensitiveLog,
            outputFilterSensitiveLog: PredictOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PredictCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PredictCommand(input, context);
    };
    PredictCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PredictCommand(output, context);
    };
    return PredictCommand;
}($Command));
export { PredictCommand };
//# sourceMappingURL=PredictCommand.js.map