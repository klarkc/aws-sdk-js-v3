import { __extends } from "tslib";
import { DescribeDetectorRequest, DescribeDetectorResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeDetectorCommand, serializeAws_json1_1DescribeDetectorCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets all versions for a specified detector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, DescribeDetectorCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, DescribeDetectorCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new DescribeDetectorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDetectorCommandInput} for command's `input` shape.
 * @see {@link DescribeDetectorCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDetectorCommand = /** @class */ (function (_super) {
    __extends(DescribeDetectorCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDetectorCommand(input) {
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
    DescribeDetectorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FraudDetectorClient";
        var commandName = "DescribeDetectorCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDetectorRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDetectorResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDetectorCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeDetectorCommand(input, context);
    };
    DescribeDetectorCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeDetectorCommand(output, context);
    };
    return DescribeDetectorCommand;
}($Command));
export { DescribeDetectorCommand };
//# sourceMappingURL=DescribeDetectorCommand.js.map