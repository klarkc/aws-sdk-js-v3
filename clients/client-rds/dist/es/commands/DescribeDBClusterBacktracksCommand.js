import { __extends } from "tslib";
import { DBClusterBacktrackMessage, DescribeDBClusterBacktracksMessage } from "../models/models_0";
import { deserializeAws_queryDescribeDBClusterBacktracksCommand, serializeAws_queryDescribeDBClusterBacktracksCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about backtracks for a DB cluster.</p>
 *         <p>For more information on Amazon Aurora, see
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
 *                 What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i>
 *         </p>
 *         <note>
 *             <p>This action only applies to Aurora MySQL DB clusters.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBClusterBacktracksCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBClusterBacktracksCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeDBClusterBacktracksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDBClusterBacktracksCommandInput} for command's `input` shape.
 * @see {@link DescribeDBClusterBacktracksCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDBClusterBacktracksCommand = /** @class */ (function (_super) {
    __extends(DescribeDBClusterBacktracksCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDBClusterBacktracksCommand(input) {
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
    DescribeDBClusterBacktracksCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "DescribeDBClusterBacktracksCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDBClusterBacktracksMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DBClusterBacktrackMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDBClusterBacktracksCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeDBClusterBacktracksCommand(input, context);
    };
    DescribeDBClusterBacktracksCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeDBClusterBacktracksCommand(output, context);
    };
    return DescribeDBClusterBacktracksCommand;
}($Command));
export { DescribeDBClusterBacktracksCommand };
//# sourceMappingURL=DescribeDBClusterBacktracksCommand.js.map