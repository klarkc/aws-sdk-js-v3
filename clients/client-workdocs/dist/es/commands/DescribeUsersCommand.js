import { __extends } from "tslib";
import { DescribeUsersRequest, DescribeUsersResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeUsersCommand, serializeAws_restJson1DescribeUsersCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the specified users. You can describe all users or filter the results
 *             (for example, by status or organization).</p>
 *         <p>By default, Amazon WorkDocs returns the first 24 active or pending users. If there
 *             are more results, the response includes a marker that you can use to request the next
 *             set of results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, DescribeUsersCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, DescribeUsersCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new DescribeUsersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeUsersCommandInput} for command's `input` shape.
 * @see {@link DescribeUsersCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeUsersCommand = /** @class */ (function (_super) {
    __extends(DescribeUsersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeUsersCommand(input) {
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
    DescribeUsersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkDocsClient";
        var commandName = "DescribeUsersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeUsersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeUsersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeUsersCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeUsersCommand(input, context);
    };
    DescribeUsersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeUsersCommand(output, context);
    };
    return DescribeUsersCommand;
}($Command));
export { DescribeUsersCommand };
//# sourceMappingURL=DescribeUsersCommand.js.map