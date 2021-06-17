import { __extends } from "tslib";
import { SearchProfilesRequest, SearchProfilesResponse } from "../models/models_0";
import { deserializeAws_restJson1SearchProfilesCommand, serializeAws_restJson1SearchProfilesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Searches for profiles within a specific domain name using name, phone number, email
 *          address, account number, or a custom defined index.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, SearchProfilesCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, SearchProfilesCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new SearchProfilesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchProfilesCommandInput} for command's `input` shape.
 * @see {@link SearchProfilesCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SearchProfilesCommand = /** @class */ (function (_super) {
    __extends(SearchProfilesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SearchProfilesCommand(input) {
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
    SearchProfilesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CustomerProfilesClient";
        var commandName = "SearchProfilesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SearchProfilesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SearchProfilesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SearchProfilesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1SearchProfilesCommand(input, context);
    };
    SearchProfilesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1SearchProfilesCommand(output, context);
    };
    return SearchProfilesCommand;
}($Command));
export { SearchProfilesCommand };
//# sourceMappingURL=SearchProfilesCommand.js.map