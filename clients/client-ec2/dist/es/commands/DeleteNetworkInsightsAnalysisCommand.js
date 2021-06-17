import { __extends } from "tslib";
import { DeleteNetworkInsightsAnalysisRequest, DeleteNetworkInsightsAnalysisResult } from "../models/models_2";
import { deserializeAws_ec2DeleteNetworkInsightsAnalysisCommand, serializeAws_ec2DeleteNetworkInsightsAnalysisCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified network insights analysis.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteNetworkInsightsAnalysisCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteNetworkInsightsAnalysisCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteNetworkInsightsAnalysisCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteNetworkInsightsAnalysisCommandInput} for command's `input` shape.
 * @see {@link DeleteNetworkInsightsAnalysisCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteNetworkInsightsAnalysisCommand = /** @class */ (function (_super) {
    __extends(DeleteNetworkInsightsAnalysisCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteNetworkInsightsAnalysisCommand(input) {
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
    DeleteNetworkInsightsAnalysisCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DeleteNetworkInsightsAnalysisCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteNetworkInsightsAnalysisRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteNetworkInsightsAnalysisResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteNetworkInsightsAnalysisCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DeleteNetworkInsightsAnalysisCommand(input, context);
    };
    DeleteNetworkInsightsAnalysisCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DeleteNetworkInsightsAnalysisCommand(output, context);
    };
    return DeleteNetworkInsightsAnalysisCommand;
}($Command));
export { DeleteNetworkInsightsAnalysisCommand };
//# sourceMappingURL=DeleteNetworkInsightsAnalysisCommand.js.map