import { __extends } from "tslib";
import { RevokeGrantRequest } from "../models/models_0";
import { deserializeAws_json1_1RevokeGrantCommand, serializeAws_json1_1RevokeGrantCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Revokes the specified grant for the specified customer master key (CMK). You can revoke a
 *       grant to actively deny operations that depend on it.</p>
 *          <p>
 *             <b>Cross-account use</b>: Yes. To perform this operation on a CMK in a different AWS account, specify the key
 *   ARN in the value of the <code>KeyId</code> parameter.</p>
 *
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:RevokeGrant</a> (key policy)</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateGrant</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListGrants</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListRetirableGrants</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>RetireGrant</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, RevokeGrantCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, RevokeGrantCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new RevokeGrantCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RevokeGrantCommandInput} for command's `input` shape.
 * @see {@link RevokeGrantCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RevokeGrantCommand = /** @class */ (function (_super) {
    __extends(RevokeGrantCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RevokeGrantCommand(input) {
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
    RevokeGrantCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KMSClient";
        var commandName = "RevokeGrantCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RevokeGrantRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RevokeGrantCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RevokeGrantCommand(input, context);
    };
    RevokeGrantCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RevokeGrantCommand(output, context);
    };
    return RevokeGrantCommand;
}($Command));
export { RevokeGrantCommand };
//# sourceMappingURL=RevokeGrantCommand.js.map