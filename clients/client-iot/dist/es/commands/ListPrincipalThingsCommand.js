import { __extends } from "tslib";
import { ListPrincipalThingsRequest, ListPrincipalThingsResponse } from "../models/models_1";
import { deserializeAws_restJson1ListPrincipalThingsCommand, serializeAws_restJson1ListPrincipalThingsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the things associated with the specified principal. A principal can be X.509
 * 			certificates, IAM users, groups, and roles, Amazon Cognito identities or federated
 * 			identities. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListPrincipalThingsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListPrincipalThingsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListPrincipalThingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPrincipalThingsCommandInput} for command's `input` shape.
 * @see {@link ListPrincipalThingsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPrincipalThingsCommand = /** @class */ (function (_super) {
    __extends(ListPrincipalThingsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPrincipalThingsCommand(input) {
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
    ListPrincipalThingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "ListPrincipalThingsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPrincipalThingsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListPrincipalThingsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPrincipalThingsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListPrincipalThingsCommand(input, context);
    };
    ListPrincipalThingsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListPrincipalThingsCommand(output, context);
    };
    return ListPrincipalThingsCommand;
}($Command));
export { ListPrincipalThingsCommand };
//# sourceMappingURL=ListPrincipalThingsCommand.js.map