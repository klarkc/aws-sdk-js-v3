import { __extends } from "tslib";
import { ClusterParameterGroupDetails, DescribeClusterParametersMessage } from "../models/models_0";
import { deserializeAws_queryDescribeClusterParametersCommand, serializeAws_queryDescribeClusterParametersCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a detailed list of parameters contained within the specified Amazon Redshift
 *             parameter group. For each parameter the response includes information such as parameter
 *             name, description, data type, value, whether the parameter value is modifiable, and so
 *             on.</p>
 *         <p>You can specify <i>source</i> filter to retrieve parameters of only
 *             specific type. For example, to retrieve parameters that were modified by a user action
 *             such as from <a>ModifyClusterParameterGroup</a>, you can specify
 *                 <i>source</i> equal to <i>user</i>.</p>
 *         <p>
 * For more information about parameters and parameter groups, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeClusterParametersCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeClusterParametersCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeClusterParametersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeClusterParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeClusterParametersCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeClusterParametersCommand = /** @class */ (function (_super) {
    __extends(DescribeClusterParametersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeClusterParametersCommand(input) {
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
    DescribeClusterParametersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "DescribeClusterParametersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeClusterParametersMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ClusterParameterGroupDetails.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeClusterParametersCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeClusterParametersCommand(input, context);
    };
    DescribeClusterParametersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeClusterParametersCommand(output, context);
    };
    return DescribeClusterParametersCommand;
}($Command));
export { DescribeClusterParametersCommand };
//# sourceMappingURL=DescribeClusterParametersCommand.js.map