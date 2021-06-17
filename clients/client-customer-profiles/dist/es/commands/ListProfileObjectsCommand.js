import { __extends } from "tslib";
import { ListProfileObjectsRequest, ListProfileObjectsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListProfileObjectsCommand, serializeAws_restJson1ListProfileObjectsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of objects associated with a profile of a given ProfileObjectType.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, ListProfileObjectsCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, ListProfileObjectsCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new ListProfileObjectsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProfileObjectsCommandInput} for command's `input` shape.
 * @see {@link ListProfileObjectsCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListProfileObjectsCommand = /** @class */ (function (_super) {
    __extends(ListProfileObjectsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListProfileObjectsCommand(input) {
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
    ListProfileObjectsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CustomerProfilesClient";
        var commandName = "ListProfileObjectsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListProfileObjectsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListProfileObjectsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListProfileObjectsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListProfileObjectsCommand(input, context);
    };
    ListProfileObjectsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListProfileObjectsCommand(output, context);
    };
    return ListProfileObjectsCommand;
}($Command));
export { ListProfileObjectsCommand };
//# sourceMappingURL=ListProfileObjectsCommand.js.map