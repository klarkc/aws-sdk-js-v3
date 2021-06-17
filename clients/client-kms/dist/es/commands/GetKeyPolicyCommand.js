import { __extends } from "tslib";
import { GetKeyPolicyRequest, GetKeyPolicyResponse } from "../models/models_0";
import { deserializeAws_json1_1GetKeyPolicyCommand, serializeAws_json1_1GetKeyPolicyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a key policy attached to the specified customer master key (CMK).</p>
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot perform this operation on a CMK in a different AWS account.</p>
 *
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GetKeyPolicy</a> (key policy)</p>
 *          <p>
 *             <b>Related operations</b>: <a>PutKeyPolicy</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, GetKeyPolicyCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, GetKeyPolicyCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new GetKeyPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetKeyPolicyCommandInput} for command's `input` shape.
 * @see {@link GetKeyPolicyCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetKeyPolicyCommand = /** @class */ (function (_super) {
    __extends(GetKeyPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetKeyPolicyCommand(input) {
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
    GetKeyPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KMSClient";
        var commandName = "GetKeyPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetKeyPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetKeyPolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetKeyPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetKeyPolicyCommand(input, context);
    };
    GetKeyPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetKeyPolicyCommand(output, context);
    };
    return GetKeyPolicyCommand;
}($Command));
export { GetKeyPolicyCommand };
//# sourceMappingURL=GetKeyPolicyCommand.js.map