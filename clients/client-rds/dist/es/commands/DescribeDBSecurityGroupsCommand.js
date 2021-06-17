import { __extends } from "tslib";
import { DBSecurityGroupMessage, DescribeDBSecurityGroupsMessage } from "../models/models_1";
import { deserializeAws_queryDescribeDBSecurityGroupsCommand, serializeAws_queryDescribeDBSecurityGroupsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *         Returns a list of <code>DBSecurityGroup</code> descriptions. If a <code>DBSecurityGroupName</code> is specified,
 *             the list will contain only the descriptions of the specified DB security group.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBSecurityGroupsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBSecurityGroupsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeDBSecurityGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDBSecurityGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBSecurityGroupsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDBSecurityGroupsCommand = /** @class */ (function (_super) {
    __extends(DescribeDBSecurityGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDBSecurityGroupsCommand(input) {
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
    DescribeDBSecurityGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "DescribeDBSecurityGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDBSecurityGroupsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DBSecurityGroupMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDBSecurityGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeDBSecurityGroupsCommand(input, context);
    };
    DescribeDBSecurityGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeDBSecurityGroupsCommand(output, context);
    };
    return DescribeDBSecurityGroupsCommand;
}($Command));
export { DescribeDBSecurityGroupsCommand };
//# sourceMappingURL=DescribeDBSecurityGroupsCommand.js.map