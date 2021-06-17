import { __extends } from "tslib";
import { DescribeNodeConfigurationOptionsMessage, NodeConfigurationOptionsMessage } from "../models/models_0";
import { deserializeAws_queryDescribeNodeConfigurationOptionsCommand, serializeAws_queryDescribeNodeConfigurationOptionsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns properties of possible node configurations such as node type, number of nodes, and
 *             disk usage for the specified action type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeNodeConfigurationOptionsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeNodeConfigurationOptionsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeNodeConfigurationOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeNodeConfigurationOptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeNodeConfigurationOptionsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeNodeConfigurationOptionsCommand = /** @class */ (function (_super) {
    __extends(DescribeNodeConfigurationOptionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeNodeConfigurationOptionsCommand(input) {
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
    DescribeNodeConfigurationOptionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "DescribeNodeConfigurationOptionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeNodeConfigurationOptionsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: NodeConfigurationOptionsMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeNodeConfigurationOptionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeNodeConfigurationOptionsCommand(input, context);
    };
    DescribeNodeConfigurationOptionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeNodeConfigurationOptionsCommand(output, context);
    };
    return DescribeNodeConfigurationOptionsCommand;
}($Command));
export { DescribeNodeConfigurationOptionsCommand };
//# sourceMappingURL=DescribeNodeConfigurationOptionsCommand.js.map