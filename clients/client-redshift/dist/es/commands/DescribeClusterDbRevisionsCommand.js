import { __extends } from "tslib";
import { ClusterDbRevisionsMessage, DescribeClusterDbRevisionsMessage } from "../models/models_0";
import { deserializeAws_queryDescribeClusterDbRevisionsCommand, serializeAws_queryDescribeClusterDbRevisionsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns an array of <code>ClusterDbRevision</code> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeClusterDbRevisionsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeClusterDbRevisionsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeClusterDbRevisionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeClusterDbRevisionsCommandInput} for command's `input` shape.
 * @see {@link DescribeClusterDbRevisionsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeClusterDbRevisionsCommand = /** @class */ (function (_super) {
    __extends(DescribeClusterDbRevisionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeClusterDbRevisionsCommand(input) {
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
    DescribeClusterDbRevisionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "DescribeClusterDbRevisionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeClusterDbRevisionsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ClusterDbRevisionsMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeClusterDbRevisionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeClusterDbRevisionsCommand(input, context);
    };
    DescribeClusterDbRevisionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeClusterDbRevisionsCommand(output, context);
    };
    return DescribeClusterDbRevisionsCommand;
}($Command));
export { DescribeClusterDbRevisionsCommand };
//# sourceMappingURL=DescribeClusterDbRevisionsCommand.js.map