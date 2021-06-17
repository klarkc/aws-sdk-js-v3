import { __extends } from "tslib";
import { DescribeGlobalClustersMessage, GlobalClustersMessage } from "../models/models_1";
import { deserializeAws_queryDescribeGlobalClustersCommand, serializeAws_queryDescribeGlobalClustersCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *         Returns information about Aurora global database clusters. This API supports pagination.
 *       </p>
 *          <p>
 *         For more information on Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What Is Amazon Aurora?</a> in the
 *         <i>Amazon Aurora User Guide.</i>
 *          </p>
 *          <note>
 *            <p>This action only applies to Aurora DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeGlobalClustersCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeGlobalClustersCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeGlobalClustersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeGlobalClustersCommandInput} for command's `input` shape.
 * @see {@link DescribeGlobalClustersCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeGlobalClustersCommand = /** @class */ (function (_super) {
    __extends(DescribeGlobalClustersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeGlobalClustersCommand(input) {
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
    DescribeGlobalClustersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "DescribeGlobalClustersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeGlobalClustersMessage.filterSensitiveLog,
            outputFilterSensitiveLog: GlobalClustersMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeGlobalClustersCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeGlobalClustersCommand(input, context);
    };
    DescribeGlobalClustersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeGlobalClustersCommand(output, context);
    };
    return DescribeGlobalClustersCommand;
}($Command));
export { DescribeGlobalClustersCommand };
//# sourceMappingURL=DescribeGlobalClustersCommand.js.map