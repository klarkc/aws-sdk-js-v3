import { __extends } from "tslib";
import { CreateKeySigningKeyRequest, CreateKeySigningKeyResponse } from "../models/models_0";
import { deserializeAws_restXmlCreateKeySigningKeyCommand, serializeAws_restXmlCreateKeySigningKeyCommand, } from "../protocols/Aws_restXml";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new key-signing key (KSK) associated with a hosted zone. You can only have two KSKs per hosted zone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, CreateKeySigningKeyCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, CreateKeySigningKeyCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new CreateKeySigningKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateKeySigningKeyCommandInput} for command's `input` shape.
 * @see {@link CreateKeySigningKeyCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateKeySigningKeyCommand = /** @class */ (function (_super) {
    __extends(CreateKeySigningKeyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateKeySigningKeyCommand(input) {
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
    CreateKeySigningKeyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getIdNormalizerPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "CreateKeySigningKeyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateKeySigningKeyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateKeySigningKeyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateKeySigningKeyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlCreateKeySigningKeyCommand(input, context);
    };
    CreateKeySigningKeyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlCreateKeySigningKeyCommand(output, context);
    };
    return CreateKeySigningKeyCommand;
}($Command));
export { CreateKeySigningKeyCommand };
//# sourceMappingURL=CreateKeySigningKeyCommand.js.map