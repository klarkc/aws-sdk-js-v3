import { __extends } from "tslib";
import { DescribeHubRequest, DescribeHubResponse } from "../models/models_1";
import { deserializeAws_restJson1DescribeHubCommand, serializeAws_restJson1DescribeHubCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns details about the Hub resource in your account, including the
 *             <code>HubArn</code> and the time when you enabled Security Hub.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DescribeHubCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DescribeHubCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new DescribeHubCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeHubCommandInput} for command's `input` shape.
 * @see {@link DescribeHubCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeHubCommand = /** @class */ (function (_super) {
    __extends(DescribeHubCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeHubCommand(input) {
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
    DescribeHubCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SecurityHubClient";
        var commandName = "DescribeHubCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeHubRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeHubResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeHubCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeHubCommand(input, context);
    };
    DescribeHubCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeHubCommand(output, context);
    };
    return DescribeHubCommand;
}($Command));
export { DescribeHubCommand };
//# sourceMappingURL=DescribeHubCommand.js.map