import { __extends } from "tslib";
import { DescribeParameterGroupsRequest, DescribeParameterGroupsResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeParameterGroupsCommand, serializeAws_json1_1DescribeParameterGroupsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of parameter group descriptions. If a parameter group name is
 *             specified, the list will contain only the descriptions for that group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DAXClient, DescribeParameterGroupsCommand } from "@aws-sdk/client-dax"; // ES Modules import
 * // const { DAXClient, DescribeParameterGroupsCommand } = require("@aws-sdk/client-dax"); // CommonJS import
 * const client = new DAXClient(config);
 * const command = new DescribeParameterGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeParameterGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeParameterGroupsCommandOutput} for command's `response` shape.
 * @see {@link DAXClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeParameterGroupsCommand = /** @class */ (function (_super) {
    __extends(DescribeParameterGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeParameterGroupsCommand(input) {
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
    DescribeParameterGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DAXClient";
        var commandName = "DescribeParameterGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeParameterGroupsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeParameterGroupsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeParameterGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeParameterGroupsCommand(input, context);
    };
    DescribeParameterGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeParameterGroupsCommand(output, context);
    };
    return DescribeParameterGroupsCommand;
}($Command));
export { DescribeParameterGroupsCommand };
//# sourceMappingURL=DescribeParameterGroupsCommand.js.map