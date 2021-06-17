import { __extends } from "tslib";
import { DescribeStandardsControlsRequest, DescribeStandardsControlsResponse } from "../models/models_1";
import { deserializeAws_restJson1DescribeStandardsControlsCommand, serializeAws_restJson1DescribeStandardsControlsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of security standards controls.</p>
 *          <p>For each control, the results include information about whether it is currently enabled,
 *          the severity, and a link to remediation information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DescribeStandardsControlsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DescribeStandardsControlsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new DescribeStandardsControlsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStandardsControlsCommandInput} for command's `input` shape.
 * @see {@link DescribeStandardsControlsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeStandardsControlsCommand = /** @class */ (function (_super) {
    __extends(DescribeStandardsControlsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeStandardsControlsCommand(input) {
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
    DescribeStandardsControlsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SecurityHubClient";
        var commandName = "DescribeStandardsControlsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeStandardsControlsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeStandardsControlsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeStandardsControlsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeStandardsControlsCommand(input, context);
    };
    DescribeStandardsControlsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeStandardsControlsCommand(output, context);
    };
    return DescribeStandardsControlsCommand;
}($Command));
export { DescribeStandardsControlsCommand };
//# sourceMappingURL=DescribeStandardsControlsCommand.js.map