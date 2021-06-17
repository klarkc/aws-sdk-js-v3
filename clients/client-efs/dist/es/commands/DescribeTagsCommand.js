import { __extends } from "tslib";
import { DescribeTagsRequest, DescribeTagsResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeTagsCommand, serializeAws_restJson1DescribeTagsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * @deprecated
 *
 * <note>
 *             <p>DEPRECATED - The DeleteTags action is deprecated and not maintained. Please use the
 *          API action to remove tags from EFS resources.</p>
 *          </note>
 *          <p>Returns the tags associated with a file system. The order of tags returned in the
 *       response of one <code>DescribeTags</code> call and the order of tags returned across the
 *       responses of a multiple-call iteration (when using pagination) is unspecified. </p>
 *          <p> This operation requires permissions for the
 *         <code>elasticfilesystem:DescribeTags</code> action. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, DescribeTagsCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, DescribeTagsCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const command = new DescribeTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTagsCommandInput} for command's `input` shape.
 * @see {@link DescribeTagsCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeTagsCommand = /** @class */ (function (_super) {
    __extends(DescribeTagsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeTagsCommand(input) {
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
    DescribeTagsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EFSClient";
        var commandName = "DescribeTagsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeTagsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeTagsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeTagsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeTagsCommand(input, context);
    };
    DescribeTagsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeTagsCommand(output, context);
    };
    return DescribeTagsCommand;
}($Command));
export { DescribeTagsCommand };
//# sourceMappingURL=DescribeTagsCommand.js.map