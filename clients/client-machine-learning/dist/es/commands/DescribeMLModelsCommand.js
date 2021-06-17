import { __extends } from "tslib";
import { DescribeMLModelsInput, DescribeMLModelsOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeMLModelsCommand, serializeAws_json1_1DescribeMLModelsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of <code>MLModel</code> that match the search criteria in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, DescribeMLModelsCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, DescribeMLModelsCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const command = new DescribeMLModelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMLModelsCommandInput} for command's `input` shape.
 * @see {@link DescribeMLModelsCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeMLModelsCommand = /** @class */ (function (_super) {
    __extends(DescribeMLModelsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeMLModelsCommand(input) {
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
    DescribeMLModelsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MachineLearningClient";
        var commandName = "DescribeMLModelsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeMLModelsInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeMLModelsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeMLModelsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeMLModelsCommand(input, context);
    };
    DescribeMLModelsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeMLModelsCommand(output, context);
    };
    return DescribeMLModelsCommand;
}($Command));
export { DescribeMLModelsCommand };
//# sourceMappingURL=DescribeMLModelsCommand.js.map