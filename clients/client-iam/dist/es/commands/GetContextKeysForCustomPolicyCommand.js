import { __extends } from "tslib";
import { GetContextKeysForCustomPolicyRequest, GetContextKeysForPolicyResponse } from "../models/models_0";
import { deserializeAws_queryGetContextKeysForCustomPolicyCommand, serializeAws_queryGetContextKeysForCustomPolicyCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a list of all of the context keys referenced in the input policies. The policies
 *             are supplied as a list of one or more strings. To get the context keys from policies
 *             associated with an IAM user, group, or role, use <a>GetContextKeysForPrincipalPolicy</a>.</p>
 *         <p>Context keys are variables maintained by AWS and its services that provide details
 *             about the context of an API query request. Context keys can be evaluated by testing
 *             against a value specified in an IAM policy. Use
 *                 <code>GetContextKeysForCustomPolicy</code> to understand what key names and values
 *             you must supply when you call <a>SimulateCustomPolicy</a>. Note that all
 *             parameters are shown in unencoded form here for clarity but must be URL encoded to be
 *             included as a part of a real HTML request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetContextKeysForCustomPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetContextKeysForCustomPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GetContextKeysForCustomPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetContextKeysForCustomPolicyCommandInput} for command's `input` shape.
 * @see {@link GetContextKeysForCustomPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetContextKeysForCustomPolicyCommand = /** @class */ (function (_super) {
    __extends(GetContextKeysForCustomPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetContextKeysForCustomPolicyCommand(input) {
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
    GetContextKeysForCustomPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "GetContextKeysForCustomPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetContextKeysForCustomPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetContextKeysForPolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetContextKeysForCustomPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryGetContextKeysForCustomPolicyCommand(input, context);
    };
    GetContextKeysForCustomPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryGetContextKeysForCustomPolicyCommand(output, context);
    };
    return GetContextKeysForCustomPolicyCommand;
}($Command));
export { GetContextKeysForCustomPolicyCommand };
//# sourceMappingURL=GetContextKeysForCustomPolicyCommand.js.map