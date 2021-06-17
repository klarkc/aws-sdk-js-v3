import { __extends } from "tslib";
import { DBClusterParameterGroupsMessage, DescribeDBClusterParameterGroupsMessage } from "../models/models_0";
import { deserializeAws_queryDescribeDBClusterParameterGroupsCommand, serializeAws_queryDescribeDBClusterParameterGroupsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of <code>DBClusterParameterGroup</code> descriptions. If a
 *                 <code>DBClusterParameterGroupName</code> parameter is specified, the list contains
 *             only the description of the specified cluster parameter group. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, DescribeDBClusterParameterGroupsCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, DescribeDBClusterParameterGroupsCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const command = new DescribeDBClusterParameterGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDBClusterParameterGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBClusterParameterGroupsCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDBClusterParameterGroupsCommand = /** @class */ (function (_super) {
    __extends(DescribeDBClusterParameterGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDBClusterParameterGroupsCommand(input) {
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
    DescribeDBClusterParameterGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DocDBClient";
        var commandName = "DescribeDBClusterParameterGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDBClusterParameterGroupsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DBClusterParameterGroupsMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDBClusterParameterGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeDBClusterParameterGroupsCommand(input, context);
    };
    DescribeDBClusterParameterGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeDBClusterParameterGroupsCommand(output, context);
    };
    return DescribeDBClusterParameterGroupsCommand;
}($Command));
export { DescribeDBClusterParameterGroupsCommand };
//# sourceMappingURL=DescribeDBClusterParameterGroupsCommand.js.map