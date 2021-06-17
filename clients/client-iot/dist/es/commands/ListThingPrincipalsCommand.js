import { __extends } from "tslib";
import { ListThingPrincipalsRequest, ListThingPrincipalsResponse } from "../models/models_1";
import { deserializeAws_restJson1ListThingPrincipalsCommand, serializeAws_restJson1ListThingPrincipalsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the principals associated with the specified thing. A principal can be X.509
 * 			certificates, IAM users, groups, and roles, Amazon Cognito identities or federated
 * 			identities.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListThingPrincipalsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListThingPrincipalsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListThingPrincipalsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListThingPrincipalsCommandInput} for command's `input` shape.
 * @see {@link ListThingPrincipalsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListThingPrincipalsCommand = /** @class */ (function (_super) {
    __extends(ListThingPrincipalsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListThingPrincipalsCommand(input) {
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
    ListThingPrincipalsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "ListThingPrincipalsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListThingPrincipalsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListThingPrincipalsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListThingPrincipalsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListThingPrincipalsCommand(input, context);
    };
    ListThingPrincipalsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListThingPrincipalsCommand(output, context);
    };
    return ListThingPrincipalsCommand;
}($Command));
export { ListThingPrincipalsCommand };
//# sourceMappingURL=ListThingPrincipalsCommand.js.map