import { __extends } from "tslib";
import { DetachThingPrincipalRequest, DetachThingPrincipalResponse } from "../models/models_1";
import { deserializeAws_restJson1DetachThingPrincipalCommand, serializeAws_restJson1DetachThingPrincipalCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Detaches the specified principal from the specified thing. A principal can be X.509
 * 			certificates, IAM users, groups, and roles, Amazon Cognito identities or federated
 * 			identities.</p>
 * 		       <note>
 * 			         <p>This call is asynchronous. It might take several seconds for the detachment to
 * 				propagate.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DetachThingPrincipalCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DetachThingPrincipalCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DetachThingPrincipalCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachThingPrincipalCommandInput} for command's `input` shape.
 * @see {@link DetachThingPrincipalCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DetachThingPrincipalCommand = /** @class */ (function (_super) {
    __extends(DetachThingPrincipalCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DetachThingPrincipalCommand(input) {
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
    DetachThingPrincipalCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DetachThingPrincipalCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DetachThingPrincipalRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DetachThingPrincipalResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DetachThingPrincipalCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DetachThingPrincipalCommand(input, context);
    };
    DetachThingPrincipalCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DetachThingPrincipalCommand(output, context);
    };
    return DetachThingPrincipalCommand;
}($Command));
export { DetachThingPrincipalCommand };
//# sourceMappingURL=DetachThingPrincipalCommand.js.map