import { __extends } from "tslib";
import { DescribeEngagementRequest, DescribeEngagementResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeEngagementCommand, serializeAws_json1_1DescribeEngagementCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Incident Manager uses engagements to engage contacts and escalation plans during an incident.
 *          Use this command to describe the engagement that occurred during an incident.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, DescribeEngagementCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, DescribeEngagementCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new DescribeEngagementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEngagementCommandInput} for command's `input` shape.
 * @see {@link DescribeEngagementCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeEngagementCommand = /** @class */ (function (_super) {
    __extends(DescribeEngagementCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeEngagementCommand(input) {
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
    DescribeEngagementCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMContactsClient";
        var commandName = "DescribeEngagementCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeEngagementRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeEngagementResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeEngagementCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeEngagementCommand(input, context);
    };
    DescribeEngagementCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeEngagementCommand(output, context);
    };
    return DescribeEngagementCommand;
}($Command));
export { DescribeEngagementCommand };
//# sourceMappingURL=DescribeEngagementCommand.js.map