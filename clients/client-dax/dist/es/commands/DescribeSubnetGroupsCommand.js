import { __extends } from "tslib";
import { DescribeSubnetGroupsRequest, DescribeSubnetGroupsResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeSubnetGroupsCommand, serializeAws_json1_1DescribeSubnetGroupsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of subnet group descriptions. If a subnet group name is specified,
 *             the list will contain only the description of that group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DAXClient, DescribeSubnetGroupsCommand } from "@aws-sdk/client-dax"; // ES Modules import
 * // const { DAXClient, DescribeSubnetGroupsCommand } = require("@aws-sdk/client-dax"); // CommonJS import
 * const client = new DAXClient(config);
 * const command = new DescribeSubnetGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSubnetGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeSubnetGroupsCommandOutput} for command's `response` shape.
 * @see {@link DAXClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeSubnetGroupsCommand = /** @class */ (function (_super) {
    __extends(DescribeSubnetGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeSubnetGroupsCommand(input) {
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
    DescribeSubnetGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DAXClient";
        var commandName = "DescribeSubnetGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeSubnetGroupsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeSubnetGroupsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeSubnetGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeSubnetGroupsCommand(input, context);
    };
    DescribeSubnetGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeSubnetGroupsCommand(output, context);
    };
    return DescribeSubnetGroupsCommand;
}($Command));
export { DescribeSubnetGroupsCommand };
//# sourceMappingURL=DescribeSubnetGroupsCommand.js.map