import { __extends } from "tslib";
import { DescribeDocumentVersionsRequest, DescribeDocumentVersionsResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeDocumentVersionsCommand, serializeAws_restJson1DescribeDocumentVersionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the document versions for the specified document.</p>
 *         <p>By default, only active versions are returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, DescribeDocumentVersionsCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, DescribeDocumentVersionsCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new DescribeDocumentVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDocumentVersionsCommandInput} for command's `input` shape.
 * @see {@link DescribeDocumentVersionsCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDocumentVersionsCommand = /** @class */ (function (_super) {
    __extends(DescribeDocumentVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDocumentVersionsCommand(input) {
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
    DescribeDocumentVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkDocsClient";
        var commandName = "DescribeDocumentVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDocumentVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDocumentVersionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDocumentVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeDocumentVersionsCommand(input, context);
    };
    DescribeDocumentVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeDocumentVersionsCommand(output, context);
    };
    return DescribeDocumentVersionsCommand;
}($Command));
export { DescribeDocumentVersionsCommand };
//# sourceMappingURL=DescribeDocumentVersionsCommand.js.map