import { __extends } from "tslib";
import { DescribeRemediationExceptionsRequest, DescribeRemediationExceptionsResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeRemediationExceptionsCommand, serializeAws_json1_1DescribeRemediationExceptionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the details of one or more remediation exceptions. A detailed view of a remediation exception for a set of resources that includes an explanation of an exception and the time when the exception will be deleted.
 * 			When you specify the limit and the next token, you receive a paginated response. </p>
 * 		       <note>
 *             <p>AWS Config generates a remediation exception when a problem occurs executing a remediation action to a specific resource.
 * 				Remediation exceptions blocks auto-remediation until the exception is cleared.</p>
 * 			         <p>When you specify the limit and the next token, you receive a paginated response. </p>
 * 			         <p>Limit and next token are not applicable if you request resources in batch. It is only applicable, when you request all resources.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeRemediationExceptionsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeRemediationExceptionsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribeRemediationExceptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRemediationExceptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeRemediationExceptionsCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeRemediationExceptionsCommand = /** @class */ (function (_super) {
    __extends(DescribeRemediationExceptionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeRemediationExceptionsCommand(input) {
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
    DescribeRemediationExceptionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "DescribeRemediationExceptionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeRemediationExceptionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeRemediationExceptionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeRemediationExceptionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeRemediationExceptionsCommand(input, context);
    };
    DescribeRemediationExceptionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeRemediationExceptionsCommand(output, context);
    };
    return DescribeRemediationExceptionsCommand;
}($Command));
export { DescribeRemediationExceptionsCommand };
//# sourceMappingURL=DescribeRemediationExceptionsCommand.js.map