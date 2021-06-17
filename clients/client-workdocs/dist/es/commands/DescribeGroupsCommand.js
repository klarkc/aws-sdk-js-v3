import { __extends } from "tslib";
import { DescribeGroupsRequest, DescribeGroupsResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeGroupsCommand, serializeAws_restJson1DescribeGroupsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the groups specified by the query. Groups are defined by the underlying
 *             Active Directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, DescribeGroupsCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, DescribeGroupsCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new DescribeGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeGroupsCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeGroupsCommand = /** @class */ (function (_super) {
    __extends(DescribeGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeGroupsCommand(input) {
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
    DescribeGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkDocsClient";
        var commandName = "DescribeGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeGroupsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeGroupsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeGroupsCommand(input, context);
    };
    DescribeGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeGroupsCommand(output, context);
    };
    return DescribeGroupsCommand;
}($Command));
export { DescribeGroupsCommand };
//# sourceMappingURL=DescribeGroupsCommand.js.map