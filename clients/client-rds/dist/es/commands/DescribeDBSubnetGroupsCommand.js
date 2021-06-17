import { __extends } from "tslib";
import { DBSubnetGroupMessage, DescribeDBSubnetGroupsMessage } from "../models/models_1";
import { deserializeAws_queryDescribeDBSubnetGroupsCommand, serializeAws_queryDescribeDBSubnetGroupsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of DBSubnetGroup descriptions. If a DBSubnetGroupName is specified, the list will contain only the descriptions of the specified DBSubnetGroup.</p>
 *          <p>For an overview of CIDR ranges, go to the
 *             <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Wikipedia Tutorial</a>.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBSubnetGroupsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBSubnetGroupsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeDBSubnetGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDBSubnetGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBSubnetGroupsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "RDSClient";
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