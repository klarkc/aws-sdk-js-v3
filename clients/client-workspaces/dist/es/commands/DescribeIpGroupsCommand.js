import { __extends } from "tslib";
import { DescribeIpGroupsRequest, DescribeIpGroupsResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeIpGroupsCommand, serializeAws_json1_1DescribeIpGroupsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes one or more of your IP access control groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeIpGroupsCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DescribeIpGroupsCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new DescribeIpGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeIpGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeIpGroupsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeIpGroupsCommand = /** @class */ (function (_super) {
    __extends(DescribeIpGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeIpGroupsCommand(input) {
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
    DescribeIpGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkSpacesClient";
        var commandName = "DescribeIpGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeIpGroupsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeIpGroupsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeIpGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeIpGroupsCommand(input, context);
    };
    DescribeIpGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeIpGroupsCommand(output, context);
    };
    return DescribeIpGroupsCommand;
}($Command));
export { DescribeIpGroupsCommand };
//# sourceMappingURL=DescribeIpGroupsCommand.js.map