import { __extends } from "tslib";
import { DescribeClusterRequest, DescribeClusterResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeClusterCommand, serializeAws_json1_1DescribeClusterCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about a specific cluster including shipping information, cluster
 *       status, and other important metadata.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, DescribeClusterCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, DescribeClusterCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new DescribeClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeClusterCommandInput} for command's `input` shape.
 * @see {@link DescribeClusterCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "SnowballClient";
        var commandName = "DescribeClusterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeClusterRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeClusterResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeClusterCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeClusterCommand(input, context);
    };
    DescribeClusterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeClusterCommand(output, context);
    };
    return DescribeClusterCommand;
}($Command));
export { DescribeClusterCommand };
//# sourceMappingURL=DescribeClusterCommand.js.map