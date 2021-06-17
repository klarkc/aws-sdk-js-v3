import { __extends } from "tslib";
import { DescribePublishingDestinationRequest, DescribePublishingDestinationResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribePublishingDestinationCommand, serializeAws_restJson1DescribePublishingDestinationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about the publishing destination specified by the provided
 *         <code>destinationId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, DescribePublishingDestinationCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, DescribePublishingDestinationCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new DescribePublishingDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePublishingDestinationCommandInput} for command's `input` shape.
 * @see {@link DescribePublishingDestinationCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribePublishingDestinationCommand = /** @class */ (function (_super) {
    __extends(DescribePublishingDestinationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribePublishingDestinationCommand(input) {
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
    DescribePublishingDestinationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GuardDutyClient";
        var commandName = "DescribePublishingDestinationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribePublishingDestinationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribePublishingDestinationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribePublishingDestinationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribePublishingDestinationCommand(input, context);
    };
    DescribePublishingDestinationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribePublishingDestinationCommand(output, context);
    };
    return DescribePublishingDestinationCommand;
}($Command));
export { DescribePublishingDestinationCommand };
//# sourceMappingURL=DescribePublishingDestinationCommand.js.map