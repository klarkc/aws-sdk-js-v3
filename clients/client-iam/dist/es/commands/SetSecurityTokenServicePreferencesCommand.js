import { __extends } from "tslib";
import { SetSecurityTokenServicePreferencesRequest } from "../models/models_0";
import { deserializeAws_querySetSecurityTokenServicePreferencesCommand, serializeAws_querySetSecurityTokenServicePreferencesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sets the specified version of the global endpoint token as the token version used for
 *             the AWS account.</p>
 *         <p>By default, AWS Security Token Service (STS) is available as a global service, and all STS requests
 *             go to a single endpoint at <code>https://sts.amazonaws.com</code>. AWS recommends
 *             using Regional STS endpoints to reduce latency, build in redundancy, and increase
 *             session token availability. For information about Regional endpoints for STS, see
 *                 <a href="https://docs.aws.amazon.com/general/latest/gr/sts.html">AWS AWS Security Token
 *                 Service endpoints and quotas</a> in the
 *             <i>AWS General Reference</i>.</p>
 *         <p>If you make an STS call to the global endpoint, the resulting session tokens might
 *             be valid in some Regions but not others. It depends on the version that is set in this
 *             operation. Version 1 tokens are valid only in AWS Regions that are available by
 *             default. These tokens do not work in manually enabled Regions, such as Asia Pacific
 *             (Hong Kong). Version 2 tokens are valid in all Regions. However, version 2 tokens are
 *             longer and might affect systems where you temporarily store tokens. For information, see
 *                 <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and
 *                 deactivating STS in an AWS region</a> in the
 *                 <i>IAM User Guide</i>.</p>
 *         <p>To view the current session token version, see the
 *                 <code>GlobalEndpointTokenVersion</code> entry in the response of the <a>GetAccountSummary</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, SetSecurityTokenServicePreferencesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, SetSecurityTokenServicePreferencesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new SetSecurityTokenServicePreferencesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetSecurityTokenServicePreferencesCommandInput} for command's `input` shape.
 * @see {@link SetSecurityTokenServicePreferencesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SetSecurityTokenServicePreferencesCommand = /** @class */ (function (_super) {
    __extends(SetSecurityTokenServicePreferencesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SetSecurityTokenServicePreferencesCommand(input) {
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
    SetSecurityTokenServicePreferencesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "SetSecurityTokenServicePreferencesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SetSecurityTokenServicePreferencesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SetSecurityTokenServicePreferencesCommand.prototype.serialize = function (input, context) {
        return serializeAws_querySetSecurityTokenServicePreferencesCommand(input, context);
    };
    SetSecurityTokenServicePreferencesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_querySetSecurityTokenServicePreferencesCommand(output, context);
    };
    return SetSecurityTokenServicePreferencesCommand;
}($Command));
export { SetSecurityTokenServicePreferencesCommand };
//# sourceMappingURL=SetSecurityTokenServicePreferencesCommand.js.map