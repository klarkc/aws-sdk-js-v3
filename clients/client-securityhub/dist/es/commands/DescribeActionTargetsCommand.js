import { __extends } from "tslib";
import { DescribeActionTargetsRequest, DescribeActionTargetsResponse } from "../models/models_1";
import { deserializeAws_restJson1DescribeActionTargetsCommand, serializeAws_restJson1DescribeActionTargetsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of the custom action targets in Security Hub in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DescribeActionTargetsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DescribeActionTargetsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new DescribeActionTargetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeActionTargetsCommandInput} for command's `input` shape.
 * @see {@link DescribeActionTargetsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeActionTargetsCommand = /** @class */ (function (_super) {
    __extends(DescribeActionTargetsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeActionTargetsCommand(input) {
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
    DescribeActionTargetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SecurityHubClient";
        var commandName = "DescribeActionTargetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeActionTargetsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeActionTargetsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeActionTargetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeActionTargetsCommand(input, context);
    };
    DescribeActionTargetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeActionTargetsCommand(output, context);
    };
    return DescribeActionTargetsCommand;
}($Command));
export { DescribeActionTargetsCommand };
//# sourceMappingURL=DescribeActionTargetsCommand.js.map