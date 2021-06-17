import { __extends } from "tslib";
import { ListProfileObjectTypeTemplatesRequest, ListProfileObjectTypeTemplatesResponse } from "../models/models_0";
import { deserializeAws_restJson1ListProfileObjectTypeTemplatesCommand, serializeAws_restJson1ListProfileObjectTypeTemplatesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all of the template information for object types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, ListProfileObjectTypeTemplatesCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, ListProfileObjectTypeTemplatesCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new ListProfileObjectTypeTemplatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProfileObjectTypeTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListProfileObjectTypeTemplatesCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListProfileObjectTypeTemplatesCommand = /** @class */ (function (_super) {
    __extends(ListProfileObjectTypeTemplatesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListProfileObjectTypeTemplatesCommand(input) {
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
    ListProfileObjectTypeTemplatesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CustomerProfilesClient";
        var commandName = "ListProfileObjectTypeTemplatesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListProfileObjectTypeTemplatesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListProfileObjectTypeTemplatesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListProfileObjectTypeTemplatesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListProfileObjectTypeTemplatesCommand(input, context);
    };
    ListProfileObjectTypeTemplatesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListProfileObjectTypeTemplatesCommand(output, context);
    };
    return ListProfileObjectTypeTemplatesCommand;
}($Command));
export { ListProfileObjectTypeTemplatesCommand };
//# sourceMappingURL=ListProfileObjectTypeTemplatesCommand.js.map