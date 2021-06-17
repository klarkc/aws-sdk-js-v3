import { __extends } from "tslib";
import { DescribeEvaluationsInput, DescribeEvaluationsOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeEvaluationsCommand, serializeAws_json1_1DescribeEvaluationsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of <code>DescribeEvaluations</code> that match the search criteria in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, DescribeEvaluationsCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, DescribeEvaluationsCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const command = new DescribeEvaluationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEvaluationsCommandInput} for command's `input` shape.
 * @see {@link DescribeEvaluationsCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeEvaluationsCommand = /** @class */ (function (_super) {
    __extends(DescribeEvaluationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeEvaluationsCommand(input) {
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
    DescribeEvaluationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MachineLearningClient";
        var commandName = "DescribeEvaluationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeEvaluationsInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeEvaluationsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeEvaluationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeEvaluationsCommand(input, context);
    };
    DescribeEvaluationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeEvaluationsCommand(output, context);
    };
    return DescribeEvaluationsCommand;
}($Command));
export { DescribeEvaluationsCommand };
//# sourceMappingURL=DescribeEvaluationsCommand.js.map