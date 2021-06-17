import { __extends } from "tslib";
import { PutRemediationExceptionsRequest, PutRemediationExceptionsResponse } from "../models/models_0";
import { deserializeAws_json1_1PutRemediationExceptionsCommand, serializeAws_json1_1PutRemediationExceptionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>A remediation exception is when a specific resource is no longer considered for auto-remediation.
 * 			This API adds a new exception or updates an existing exception for a specific resource with a specific AWS Config rule. </p>
 * 		       <note>
 *             <p>AWS Config generates a remediation exception when a problem occurs executing a remediation action to a specific resource.
 * 			Remediation exceptions blocks auto-remediation until the exception is cleared.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutRemediationExceptionsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutRemediationExceptionsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new PutRemediationExceptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutRemediationExceptionsCommandInput} for command's `input` shape.
 * @see {@link PutRemediationExceptionsCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutRemediationExceptionsCommand = /** @class */ (function (_super) {
    __extends(PutRemediationExceptionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutRemediationExceptionsCommand(input) {
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
    PutRemediationExceptionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "PutRemediationExceptionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutRemediationExceptionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutRemediationExceptionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutRemediationExceptionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutRemediationExceptionsCommand(input, context);
    };
    PutRemediationExceptionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutRemediationExceptionsCommand(output, context);
    };
    return PutRemediationExceptionsCommand;
}($Command));
export { PutRemediationExceptionsCommand };
//# sourceMappingURL=PutRemediationExceptionsCommand.js.map