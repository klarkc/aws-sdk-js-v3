import { __extends } from "tslib";
import { CreateGroupCertificateAuthorityRequest, CreateGroupCertificateAuthorityResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateGroupCertificateAuthorityCommand, serializeAws_restJson1CreateGroupCertificateAuthorityCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Creates a CA for the group. If a CA already exists, it will rotate the existing CA.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateGroupCertificateAuthorityCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateGroupCertificateAuthorityCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new CreateGroupCertificateAuthorityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateGroupCertificateAuthorityCommandInput} for command's `input` shape.
 * @see {@link CreateGroupCertificateAuthorityCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateGroupCertificateAuthorityCommand = /** @class */ (function (_super) {
    __extends(CreateGroupCertificateAuthorityCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateGroupCertificateAuthorityCommand(input) {
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
    CreateGroupCertificateAuthorityCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "CreateGroupCertificateAuthorityCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateGroupCertificateAuthorityRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateGroupCertificateAuthorityResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateGroupCertificateAuthorityCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateGroupCertificateAuthorityCommand(input, context);
    };
    CreateGroupCertificateAuthorityCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateGroupCertificateAuthorityCommand(output, context);
    };
    return CreateGroupCertificateAuthorityCommand;
}($Command));
export { CreateGroupCertificateAuthorityCommand };
//# sourceMappingURL=CreateGroupCertificateAuthorityCommand.js.map