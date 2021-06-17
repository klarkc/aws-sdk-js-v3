import { __extends } from "tslib";
import { GetSAMLProviderRequest, GetSAMLProviderResponse } from "../models/models_0";
import { deserializeAws_queryGetSAMLProviderCommand, serializeAws_queryGetSAMLProviderCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the SAML provider metadocument that was uploaded when the IAM SAML provider
 *             resource object was created or updated.</p>
 *         <note>
 *             <p>This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetSAMLProviderCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetSAMLProviderCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GetSAMLProviderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSAMLProviderCommandInput} for command's `input` shape.
 * @see {@link GetSAMLProviderCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSAMLProviderCommand = /** @class */ (function (_super) {
    __extends(GetSAMLProviderCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSAMLProviderCommand(input) {
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
    GetSAMLProviderCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "GetSAMLProviderCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSAMLProviderRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetSAMLProviderResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSAMLProviderCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryGetSAMLProviderCommand(input, context);
    };
    GetSAMLProviderCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryGetSAMLProviderCommand(output, context);
    };
    return GetSAMLProviderCommand;
}($Command));
export { GetSAMLProviderCommand };
//# sourceMappingURL=GetSAMLProviderCommand.js.map