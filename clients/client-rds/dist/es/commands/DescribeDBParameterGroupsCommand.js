import { __extends } from "tslib";
import { DBParameterGroupsMessage, DescribeDBParameterGroupsMessage } from "../models/models_0";
import { deserializeAws_queryDescribeDBParameterGroupsCommand, serializeAws_queryDescribeDBParameterGroupsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *         Returns a list of <code>DBParameterGroup</code> descriptions. If a <code>DBParameterGroupName</code> is specified,
 *             the list will contain only the description of the specified DB parameter group.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBParameterGroupsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBParameterGroupsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeDBParameterGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDBParameterGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBParameterGroupsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDBParameterGroupsCommand = /** @class */ (function (_super) {
    __extends(DescribeDBParameterGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDBParameterGroupsCommand(input) {
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
    DescribeDBParameterGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "DescribeDBParameterGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDBParameterGroupsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DBParameterGroupsMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDBParameterGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeDBParameterGroupsCommand(input, context);
    };
    DescribeDBParameterGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeDBParameterGroupsCommand(output, context);
    };
    return DescribeDBParameterGroupsCommand;
}($Command));
export { DescribeDBParameterGroupsCommand };
//# sourceMappingURL=DescribeDBParameterGroupsCommand.js.map