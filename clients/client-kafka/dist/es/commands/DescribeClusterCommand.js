import { __extends } from "tslib";
import { DescribeClusterRequest, DescribeClusterResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeClusterCommand, serializeAws_restJson1DescribeClusterCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a description of the MSK cluster whose Amazon Resource Name (ARN) is specified in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, DescribeClusterCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, DescribeClusterCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const command = new DescribeClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeClusterCommandInput} for command's `input` shape.
 * @see {@link DescribeClusterCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeClusterCommand = /** @class */ (function (_super) {
    __extends(DescribeClusterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeClusterCommand(input) {
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
    DescribeClusterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KafkaClient";
        var commandName = "DescribeClusterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeClusterRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeClusterResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeClusterCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeClusterCommand(input, context);
    };
    DescribeClusterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeClusterCommand(output, context);
    };
    return DescribeClusterCommand;
}($Command));
export { DescribeClusterCommand };
//# sourceMappingURL=DescribeClusterCommand.js.map