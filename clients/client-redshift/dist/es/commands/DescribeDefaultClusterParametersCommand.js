import { __extends } from "tslib";
import { DescribeDefaultClusterParametersMessage, DescribeDefaultClusterParametersResult } from "../models/models_0";
import { deserializeAws_queryDescribeDefaultClusterParametersCommand, serializeAws_queryDescribeDefaultClusterParametersCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of parameter settings for the specified parameter group
 *             family.</p>
 *         <p>
 * For more information about parameters and parameter groups, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeDefaultClusterParametersCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeDefaultClusterParametersCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeDefaultClusterParametersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDefaultClusterParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeDefaultClusterParametersCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDefaultClusterParametersCommand = /** @class */ (function (_super) {
    __extends(DescribeDefaultClusterParametersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDefaultClusterParametersCommand(input) {
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
    DescribeDefaultClusterParametersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "DescribeDefaultClusterParametersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDefaultClusterParametersMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDefaultClusterParametersResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDefaultClusterParametersCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeDefaultClusterParametersCommand(input, context);
    };
    DescribeDefaultClusterParametersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeDefaultClusterParametersCommand(output, context);
    };
    return DescribeDefaultClusterParametersCommand;
}($Command));
export { DescribeDefaultClusterParametersCommand };
//# sourceMappingURL=DescribeDefaultClusterParametersCommand.js.map