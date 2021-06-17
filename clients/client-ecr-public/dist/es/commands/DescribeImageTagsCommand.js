import { __extends } from "tslib";
import { DescribeImageTagsRequest, DescribeImageTagsResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeImageTagsCommand, serializeAws_json1_1DescribeImageTagsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the image tag details for a repository in a public registry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRPUBLICClient, DescribeImageTagsCommand } from "@aws-sdk/client-ecr-public"; // ES Modules import
 * // const { ECRPUBLICClient, DescribeImageTagsCommand } = require("@aws-sdk/client-ecr-public"); // CommonJS import
 * const client = new ECRPUBLICClient(config);
 * const command = new DescribeImageTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeImageTagsCommandInput} for command's `input` shape.
 * @see {@link DescribeImageTagsCommandOutput} for command's `response` shape.
 * @see {@link ECRPUBLICClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeImageTagsCommand = /** @class */ (function (_super) {
    __extends(DescribeImageTagsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeImageTagsCommand(input) {
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
    DescribeImageTagsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECRPUBLICClient";
        var commandName = "DescribeImageTagsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeImageTagsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeImageTagsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeImageTagsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeImageTagsCommand(input, context);
    };
    DescribeImageTagsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeImageTagsCommand(output, context);
    };
    return DescribeImageTagsCommand;
}($Command));
export { DescribeImageTagsCommand };
//# sourceMappingURL=DescribeImageTagsCommand.js.map