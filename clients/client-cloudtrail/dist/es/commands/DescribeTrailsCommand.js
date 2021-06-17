import { __extends } from "tslib";
import { DescribeTrailsRequest, DescribeTrailsResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeTrailsCommand, serializeAws_json1_1DescribeTrailsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves settings for one or more trails associated with the current region for your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, DescribeTrailsCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, DescribeTrailsCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const command = new DescribeTrailsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTrailsCommandInput} for command's `input` shape.
 * @see {@link DescribeTrailsCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeTrailsCommand = /** @class */ (function (_super) {
    __extends(DescribeTrailsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeTrailsCommand(input) {
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
    DescribeTrailsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudTrailClient";
        var commandName = "DescribeTrailsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeTrailsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeTrailsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeTrailsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeTrailsCommand(input, context);
    };
    DescribeTrailsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeTrailsCommand(output, context);
    };
    return DescribeTrailsCommand;
}($Command));
export { DescribeTrailsCommand };
//# sourceMappingURL=DescribeTrailsCommand.js.map