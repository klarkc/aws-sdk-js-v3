import { __extends } from "tslib";
import { DescribeAuditStreamConfigurationRequest, DescribeAuditStreamConfigurationResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeAuditStreamConfigurationCommand, serializeAws_restJson1DescribeAuditStreamConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the configuration for delivering audit streams to the customer account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, DescribeAuditStreamConfigurationCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, DescribeAuditStreamConfigurationCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new DescribeAuditStreamConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAuditStreamConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeAuditStreamConfigurationCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAuditStreamConfigurationCommand = /** @class */ (function (_super) {
    __extends(DescribeAuditStreamConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAuditStreamConfigurationCommand(input) {
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
    DescribeAuditStreamConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkLinkClient";
        var commandName = "DescribeAuditStreamConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAuditStreamConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAuditStreamConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAuditStreamConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeAuditStreamConfigurationCommand(input, context);
    };
    DescribeAuditStreamConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeAuditStreamConfigurationCommand(output, context);
    };
    return DescribeAuditStreamConfigurationCommand;
}($Command));
export { DescribeAuditStreamConfigurationCommand };
//# sourceMappingURL=DescribeAuditStreamConfigurationCommand.js.map