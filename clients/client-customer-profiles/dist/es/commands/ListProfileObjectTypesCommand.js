import { __extends } from "tslib";
import { ListProfileObjectTypesRequest, ListProfileObjectTypesResponse } from "../models/models_0";
import { deserializeAws_restJson1ListProfileObjectTypesCommand, serializeAws_restJson1ListProfileObjectTypesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all of the templates available within the service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, ListProfileObjectTypesCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, ListProfileObjectTypesCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new ListProfileObjectTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProfileObjectTypesCommandInput} for command's `input` shape.
 * @see {@link ListProfileObjectTypesCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListProfileObjectTypesCommand = /** @class */ (function (_super) {
    __extends(ListProfileObjectTypesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListProfileObjectTypesCommand(input) {
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
    ListProfileObjectTypesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CustomerProfilesClient";
        var commandName = "ListProfileObjectTypesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListProfileObjectTypesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListProfileObjectTypesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListProfileObjectTypesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListProfileObjectTypesCommand(input, context);
    };
    ListProfileObjectTypesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListProfileObjectTypesCommand(output, context);
    };
    return ListProfileObjectTypesCommand;
}($Command));
export { ListProfileObjectTypesCommand };
//# sourceMappingURL=ListProfileObjectTypesCommand.js.map