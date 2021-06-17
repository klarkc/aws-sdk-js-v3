import { __extends } from "tslib";
import { ListPolicyPrincipalsRequest, ListPolicyPrincipalsResponse } from "../models/models_1";
import { deserializeAws_restJson1ListPolicyPrincipalsCommand, serializeAws_restJson1ListPolicyPrincipalsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * @deprecated
 *
 * <p>Lists the principals associated with the specified policy.</p>
 *          <p>
 *             <b>Note:</b> This API is deprecated. Please use <a>ListTargetsForPolicy</a> instead.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListPolicyPrincipalsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListPolicyPrincipalsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListPolicyPrincipalsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPolicyPrincipalsCommandInput} for command's `input` shape.
 * @see {@link ListPolicyPrincipalsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPolicyPrincipalsCommand = /** @class */ (function (_super) {
    __extends(ListPolicyPrincipalsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPolicyPrincipalsCommand(input) {
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
    ListPolicyPrincipalsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "ListPolicyPrincipalsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPolicyPrincipalsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListPolicyPrincipalsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPolicyPrincipalsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListPolicyPrincipalsCommand(input, context);
    };
    ListPolicyPrincipalsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListPolicyPrincipalsCommand(output, context);
    };
    return ListPolicyPrincipalsCommand;
}($Command));
export { ListPolicyPrincipalsCommand };
//# sourceMappingURL=ListPolicyPrincipalsCommand.js.map