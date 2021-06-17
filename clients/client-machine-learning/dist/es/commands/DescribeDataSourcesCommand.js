import { __extends } from "tslib";
import { DescribeDataSourcesInput, DescribeDataSourcesOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeDataSourcesCommand, serializeAws_json1_1DescribeDataSourcesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of <code>DataSource</code> that match the search criteria in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, DescribeDataSourcesCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, DescribeDataSourcesCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const command = new DescribeDataSourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDataSourcesCommandInput} for command's `input` shape.
 * @see {@link DescribeDataSourcesCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDataSourcesCommand = /** @class */ (function (_super) {
    __extends(DescribeDataSourcesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDataSourcesCommand(input) {
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
    DescribeDataSourcesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MachineLearningClient";
        var commandName = "DescribeDataSourcesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDataSourcesInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDataSourcesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDataSourcesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeDataSourcesCommand(input, context);
    };
    DescribeDataSourcesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeDataSourcesCommand(output, context);
    };
    return DescribeDataSourcesCommand;
}($Command));
export { DescribeDataSourcesCommand };
//# sourceMappingURL=DescribeDataSourcesCommand.js.map