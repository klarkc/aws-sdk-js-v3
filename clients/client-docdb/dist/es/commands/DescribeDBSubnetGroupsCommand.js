import { __extends } from "tslib";
import { DBSubnetGroupMessage, DescribeDBSubnetGroupsMessage } from "../models/models_0";
import { deserializeAws_queryDescribeDBSubnetGroupsCommand, serializeAws_queryDescribeDBSubnetGroupsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of <code>DBSubnetGroup</code> descriptions. If a
 *                 <code>DBSubnetGroupName</code> is specified, the list will contain only the
 *             descriptions of the specified <code>DBSubnetGroup</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, DescribeDBSubnetGroupsCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, DescribeDBSubnetGroupsCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const command = new DescribeDBSubnetGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDBSubnetGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBSubnetGroupsCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDBSubnetGroupsCommand = /** @class */ (function (_super) {
    __extends(DescribeDBSubnetGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDBSubnetGroupsCommand(input) {
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
    DescribeDBSubnetGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DocDBClient";
        var commandName = "DescribeDBSubnetGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDBSubnetGroupsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DBSubnetGroupMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDBSubnetGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeDBSubnetGroupsCommand(input, context);
    };
    DescribeDBSubnetGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeDBSubnetGroupsCommand(output, context);
    };
    return DescribeDBSubnetGroupsCommand;
}($Command));
export { DescribeDBSubnetGroupsCommand };
//# sourceMappingURL=DescribeDBSubnetGroupsCommand.js.map