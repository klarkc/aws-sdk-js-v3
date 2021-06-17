import { __extends } from "tslib";
import { DescribeCommentsRequest, DescribeCommentsResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeCommentsCommand, serializeAws_restJson1DescribeCommentsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List all the comments for the specified document version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, DescribeCommentsCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, DescribeCommentsCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new DescribeCommentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCommentsCommandInput} for command's `input` shape.
 * @see {@link DescribeCommentsCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeCommentsCommand = /** @class */ (function (_super) {
    __extends(DescribeCommentsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeCommentsCommand(input) {
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
    DescribeCommentsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkDocsClient";
        var commandName = "DescribeCommentsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeCommentsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeCommentsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeCommentsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeCommentsCommand(input, context);
    };
    DescribeCommentsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeCommentsCommand(output, context);
    };
    return DescribeCommentsCommand;
}($Command));
export { DescribeCommentsCommand };
//# sourceMappingURL=DescribeCommentsCommand.js.map