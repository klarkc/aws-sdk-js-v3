import { __extends } from "tslib";
import { BatchEnableStandardsRequest, BatchEnableStandardsResponse } from "../models/models_0";
import { deserializeAws_restJson1BatchEnableStandardsCommand, serializeAws_restJson1BatchEnableStandardsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enables the standards specified by the provided <code>StandardsArn</code>. To obtain the
 *          ARN for a standard, use the <code>
 *                <a>DescribeStandards</a>
 *             </code>
 *          operation.</p>
 *          <p>For more information, see the <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards.html">Security Standards</a>
 *          section of the <i>AWS Security Hub User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, BatchEnableStandardsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, BatchEnableStandardsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new BatchEnableStandardsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchEnableStandardsCommandInput} for command's `input` shape.
 * @see {@link BatchEnableStandardsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchEnableStandardsCommand = /** @class */ (function (_super) {
    __extends(BatchEnableStandardsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchEnableStandardsCommand(input) {
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
    BatchEnableStandardsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SecurityHubClient";
        var commandName = "BatchEnableStandardsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchEnableStandardsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchEnableStandardsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchEnableStandardsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1BatchEnableStandardsCommand(input, context);
    };
    BatchEnableStandardsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1BatchEnableStandardsCommand(output, context);
    };
    return BatchEnableStandardsCommand;
}($Command));
export { BatchEnableStandardsCommand };
//# sourceMappingURL=BatchEnableStandardsCommand.js.map