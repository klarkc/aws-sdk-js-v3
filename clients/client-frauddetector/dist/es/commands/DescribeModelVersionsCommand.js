import { __extends } from "tslib";
import { DescribeModelVersionsRequest, DescribeModelVersionsResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeModelVersionsCommand, serializeAws_json1_1DescribeModelVersionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets all of the model versions for the specified model type or for the specified model type and model ID. You can also get details for a single, specified model version. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, DescribeModelVersionsCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, DescribeModelVersionsCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new DescribeModelVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeModelVersionsCommandInput} for command's `input` shape.
 * @see {@link DescribeModelVersionsCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeModelVersionsCommand = /** @class */ (function (_super) {
    __extends(DescribeModelVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeModelVersionsCommand(input) {
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
    DescribeModelVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FraudDetectorClient";
        var commandName = "DescribeModelVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeModelVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeModelVersionsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeModelVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeModelVersionsCommand(input, context);
    };
    DescribeModelVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeModelVersionsCommand(output, context);
    };
    return DescribeModelVersionsCommand;
}($Command));
export { DescribeModelVersionsCommand };
//# sourceMappingURL=DescribeModelVersionsCommand.js.map