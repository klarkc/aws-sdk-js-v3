import { __extends } from "tslib";
import { GetMLModelInput, GetMLModelOutput } from "../models/models_0";
import { deserializeAws_json1_1GetMLModelCommand, serializeAws_json1_1GetMLModelCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns an <code>MLModel</code> that includes detailed metadata, data source information, and the current status of the <code>MLModel</code>.</p>
 *         <p>
 *             <code>GetMLModel</code> provides results in normal or verbose format. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, GetMLModelCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, GetMLModelCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const command = new GetMLModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMLModelCommandInput} for command's `input` shape.
 * @see {@link GetMLModelCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetMLModelCommand = /** @class */ (function (_super) {
    __extends(GetMLModelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetMLModelCommand(input) {
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
    GetMLModelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MachineLearningClient";
        var commandName = "GetMLModelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetMLModelInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetMLModelOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetMLModelCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetMLModelCommand(input, context);
    };
    GetMLModelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetMLModelCommand(output, context);
    };
    return GetMLModelCommand;
}($Command));
export { GetMLModelCommand };
//# sourceMappingURL=GetMLModelCommand.js.map