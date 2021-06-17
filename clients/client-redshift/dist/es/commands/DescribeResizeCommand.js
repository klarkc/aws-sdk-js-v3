import { __extends } from "tslib";
import { DescribeResizeMessage, ResizeProgressMessage } from "../models/models_0";
import { deserializeAws_queryDescribeResizeCommand, serializeAws_queryDescribeResizeCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about the last resize operation for the specified cluster. If
 *             no resize operation has ever been initiated for the specified cluster, a <code>HTTP
 *                 404</code> error is returned. If a resize operation was initiated and completed, the
 *             status of the resize remains as <code>SUCCEEDED</code> until the next resize. </p>
 *         <p>A resize operation can be requested using <a>ModifyCluster</a> and
 *             specifying a different number or type of nodes for the cluster. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeResizeCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeResizeCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeResizeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeResizeCommandInput} for command's `input` shape.
 * @see {@link DescribeResizeCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeResizeCommand = /** @class */ (function (_super) {
    __extends(DescribeResizeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeResizeCommand(input) {
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
    DescribeResizeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "DescribeResizeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeResizeMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ResizeProgressMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeResizeCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeResizeCommand(input, context);
    };
    DescribeResizeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeResizeCommand(output, context);
    };
    return DescribeResizeCommand;
}($Command));
export { DescribeResizeCommand };
//# sourceMappingURL=DescribeResizeCommand.js.map