import { __extends } from "tslib";
import { GetGroupCertificateAuthorityRequest, GetGroupCertificateAuthorityResponse } from "../models/models_0";
import { deserializeAws_restJson1GetGroupCertificateAuthorityCommand, serializeAws_restJson1GetGroupCertificateAuthorityCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Retreives the CA associated with a group. Returns the public key of the CA.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetGroupCertificateAuthorityCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetGroupCertificateAuthorityCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new GetGroupCertificateAuthorityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetGroupCertificateAuthorityCommandInput} for command's `input` shape.
 * @see {@link GetGroupCertificateAuthorityCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetGroupCertificateAuthorityCommand = /** @class */ (function (_super) {
    __extends(GetGroupCertificateAuthorityCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetGroupCertificateAuthorityCommand(input) {
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
    GetGroupCertificateAuthorityCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "GetGroupCertificateAuthorityCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetGroupCertificateAuthorityRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetGroupCertificateAuthorityResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetGroupCertificateAuthorityCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetGroupCertificateAuthorityCommand(input, context);
    };
    GetGroupCertificateAuthorityCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetGroupCertificateAuthorityCommand(output, context);
    };
    return GetGroupCertificateAuthorityCommand;
}($Command));
export { GetGroupCertificateAuthorityCommand };
//# sourceMappingURL=GetGroupCertificateAuthorityCommand.js.map