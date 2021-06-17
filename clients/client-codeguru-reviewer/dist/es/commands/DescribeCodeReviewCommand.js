import { __extends } from "tslib";
import { DescribeCodeReviewRequest, DescribeCodeReviewResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeCodeReviewCommand, serializeAws_restJson1DescribeCodeReviewCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Returns the metadata associated with the code review along with its status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruReviewerClient, DescribeCodeReviewCommand } from "@aws-sdk/client-codeguru-reviewer"; // ES Modules import
 * // const { CodeGuruReviewerClient, DescribeCodeReviewCommand } = require("@aws-sdk/client-codeguru-reviewer"); // CommonJS import
 * const client = new CodeGuruReviewerClient(config);
 * const command = new DescribeCodeReviewCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCodeReviewCommandInput} for command's `input` shape.
 * @see {@link DescribeCodeReviewCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruReviewerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeCodeReviewCommand = /** @class */ (function (_super) {
    __extends(DescribeCodeReviewCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeCodeReviewCommand(input) {
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
    DescribeCodeReviewCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeGuruReviewerClient";
        var commandName = "DescribeCodeReviewCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeCodeReviewRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeCodeReviewResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeCodeReviewCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeCodeReviewCommand(input, context);
    };
    DescribeCodeReviewCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeCodeReviewCommand(output, context);
    };
    return DescribeCodeReviewCommand;
}($Command));
export { DescribeCodeReviewCommand };
//# sourceMappingURL=DescribeCodeReviewCommand.js.map