import { __extends } from "tslib";
import { DescribeRuntimeVersionsRequest, DescribeRuntimeVersionsResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeRuntimeVersionsCommand, serializeAws_restJson1DescribeRuntimeVersionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of Synthetics canary runtime versions. For more information,
 *          see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html">
 *             Canary Runtime Versions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SyntheticsClient, DescribeRuntimeVersionsCommand } from "@aws-sdk/client-synthetics"; // ES Modules import
 * // const { SyntheticsClient, DescribeRuntimeVersionsCommand } = require("@aws-sdk/client-synthetics"); // CommonJS import
 * const client = new SyntheticsClient(config);
 * const command = new DescribeRuntimeVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRuntimeVersionsCommandInput} for command's `input` shape.
 * @see {@link DescribeRuntimeVersionsCommandOutput} for command's `response` shape.
 * @see {@link SyntheticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeRuntimeVersionsCommand = /** @class */ (function (_super) {
    __extends(DescribeRuntimeVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeRuntimeVersionsCommand(input) {
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
    DescribeRuntimeVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SyntheticsClient";
        var commandName = "DescribeRuntimeVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeRuntimeVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeRuntimeVersionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeRuntimeVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeRuntimeVersionsCommand(input, context);
    };
    DescribeRuntimeVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeRuntimeVersionsCommand(output, context);
    };
    return DescribeRuntimeVersionsCommand;
}($Command));
export { DescribeRuntimeVersionsCommand };
//# sourceMappingURL=DescribeRuntimeVersionsCommand.js.map