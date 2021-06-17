import { __extends } from "tslib";
import { AttachThingPrincipalRequest, AttachThingPrincipalResponse } from "../models/models_0";
import { deserializeAws_restJson1AttachThingPrincipalCommand, serializeAws_restJson1AttachThingPrincipalCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Attaches the specified principal to the specified thing. A principal can be X.509
 * 			certificates, IAM users, groups, and roles, Amazon Cognito identities or federated
 * 			identities.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, AttachThingPrincipalCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, AttachThingPrincipalCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new AttachThingPrincipalCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachThingPrincipalCommandInput} for command's `input` shape.
 * @see {@link AttachThingPrincipalCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AttachThingPrincipalCommand = /** @class */ (function (_super) {
    __extends(AttachThingPrincipalCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AttachThingPrincipalCommand(input) {
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
    AttachThingPrincipalCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "AttachThingPrincipalCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AttachThingPrincipalRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AttachThingPrincipalResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AttachThingPrincipalCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AttachThingPrincipalCommand(input, context);
    };
    AttachThingPrincipalCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AttachThingPrincipalCommand(output, context);
    };
    return AttachThingPrincipalCommand;
}($Command));
export { AttachThingPrincipalCommand };
//# sourceMappingURL=AttachThingPrincipalCommand.js.map