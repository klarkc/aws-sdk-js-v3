import { __extends } from "tslib";
import { BatchDisableStandardsRequest, BatchDisableStandardsResponse } from "../models/models_0";
import { deserializeAws_restJson1BatchDisableStandardsCommand, serializeAws_restJson1BatchDisableStandardsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disables the standards specified by the provided
 *          <code>StandardsSubscriptionArns</code>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards.html">Security Standards</a> section of the <i>AWS Security Hub User
 *          Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, BatchDisableStandardsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, BatchDisableStandardsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new BatchDisableStandardsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDisableStandardsCommandInput} for command's `input` shape.
 * @see {@link BatchDisableStandardsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchDisableStandardsCommand = /** @class */ (function (_super) {
    __extends(BatchDisableStandardsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchDisableStandardsCommand(input) {
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
    BatchDisableStandardsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SecurityHubClient";
        var commandName = "BatchDisableStandardsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchDisableStandardsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchDisableStandardsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchDisableStandardsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1BatchDisableStandardsCommand(input, context);
    };
    BatchDisableStandardsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1BatchDisableStandardsCommand(output, context);
    };
    return BatchDisableStandardsCommand;
}($Command));
export { BatchDisableStandardsCommand };
//# sourceMappingURL=BatchDisableStandardsCommand.js.map