import { __extends } from "tslib";
import { VerifyTrustRequest, VerifyTrustResult } from "../models/models_0";
import { deserializeAws_json1_1VerifyTrustCommand, serializeAws_json1_1VerifyTrustCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>AWS Directory Service for Microsoft Active Directory allows you to configure and verify trust relationships.</p>
 *          <p>This action verifies a trust relationship between your AWS Managed Microsoft AD directory and an external domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, VerifyTrustCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, VerifyTrustCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new VerifyTrustCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link VerifyTrustCommandInput} for command's `input` shape.
 * @see {@link VerifyTrustCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var VerifyTrustCommand = /** @class */ (function (_super) {
    __extends(VerifyTrustCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function VerifyTrustCommand(input) {
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
    VerifyTrustCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectoryServiceClient";
        var commandName = "VerifyTrustCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: VerifyTrustRequest.filterSensitiveLog,
            outputFilterSensitiveLog: VerifyTrustResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    VerifyTrustCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1VerifyTrustCommand(input, context);
    };
    VerifyTrustCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1VerifyTrustCommand(output, context);
    };
    return VerifyTrustCommand;
}($Command));
export { VerifyTrustCommand };
//# sourceMappingURL=VerifyTrustCommand.js.map