import { __extends } from "tslib";
import { DescribeStandardsRequest, DescribeStandardsResponse } from "../models/models_1";
import { deserializeAws_restJson1DescribeStandardsCommand, serializeAws_restJson1DescribeStandardsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of the available standards in Security Hub.</p>
 *          <p>For each standard, the results include the standard ARN, the name, and a description. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DescribeStandardsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DescribeStandardsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new DescribeStandardsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStandardsCommandInput} for command's `input` shape.
 * @see {@link DescribeStandardsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeStandardsCommand = /** @class */ (function (_super) {
    __extends(DescribeStandardsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeStandardsCommand(input) {
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
    DescribeStandardsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SecurityHubClient";
        var commandName = "DescribeStandardsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeStandardsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeStandardsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeStandardsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeStandardsCommand(input, context);
    };
    DescribeStandardsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeStandardsCommand(output, context);
    };
    return DescribeStandardsCommand;
}($Command));
export { DescribeStandardsCommand };
//# sourceMappingURL=DescribeStandardsCommand.js.map