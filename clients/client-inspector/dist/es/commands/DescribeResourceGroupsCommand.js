import { __extends } from "tslib";
import { DescribeResourceGroupsRequest, DescribeResourceGroupsResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeResourceGroupsCommand, serializeAws_json1_1DescribeResourceGroupsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the resource groups that are specified by the ARNs of the resource
 *          groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, DescribeResourceGroupsCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, DescribeResourceGroupsCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new DescribeResourceGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeResourceGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeResourceGroupsCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeResourceGroupsCommand = /** @class */ (function (_super) {
    __extends(DescribeResourceGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeResourceGroupsCommand(input) {
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
    DescribeResourceGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "InspectorClient";
        var commandName = "DescribeResourceGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeResourceGroupsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeResourceGroupsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeResourceGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeResourceGroupsCommand(input, context);
    };
    DescribeResourceGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeResourceGroupsCommand(output, context);
    };
    return DescribeResourceGroupsCommand;
}($Command));
export { DescribeResourceGroupsCommand };
//# sourceMappingURL=DescribeResourceGroupsCommand.js.map