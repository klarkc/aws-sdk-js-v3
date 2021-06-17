import { __extends } from "tslib";
import { UpdateSAMLProviderRequest, UpdateSAMLProviderResponse } from "../models/models_1";
import { deserializeAws_queryUpdateSAMLProviderCommand, serializeAws_queryUpdateSAMLProviderCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the metadata document for an existing SAML provider resource object.</p>
 *         <note>
 *             <p>This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UpdateSAMLProviderCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UpdateSAMLProviderCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new UpdateSAMLProviderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSAMLProviderCommandInput} for command's `input` shape.
 * @see {@link UpdateSAMLProviderCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateSAMLProviderCommand = /** @class */ (function (_super) {
    __extends(UpdateSAMLProviderCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateSAMLProviderCommand(input) {
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
    UpdateSAMLProviderCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "UpdateSAMLProviderCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateSAMLProviderRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateSAMLProviderResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateSAMLProviderCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryUpdateSAMLProviderCommand(input, context);
    };
    UpdateSAMLProviderCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryUpdateSAMLProviderCommand(output, context);
    };
    return UpdateSAMLProviderCommand;
}($Command));
export { UpdateSAMLProviderCommand };
//# sourceMappingURL=UpdateSAMLProviderCommand.js.map