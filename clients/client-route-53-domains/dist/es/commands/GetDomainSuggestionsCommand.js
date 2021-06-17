import { __extends } from "tslib";
import { GetDomainSuggestionsRequest, GetDomainSuggestionsResponse } from "../models/models_0";
import { deserializeAws_json1_1GetDomainSuggestionsCommand, serializeAws_json1_1GetDomainSuggestionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>The GetDomainSuggestions operation returns a list of suggested domain names.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, GetDomainSuggestionsCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, GetDomainSuggestionsCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new GetDomainSuggestionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDomainSuggestionsCommandInput} for command's `input` shape.
 * @see {@link GetDomainSuggestionsCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDomainSuggestionsCommand = /** @class */ (function (_super) {
    __extends(GetDomainSuggestionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDomainSuggestionsCommand(input) {
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
    GetDomainSuggestionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53DomainsClient";
        var commandName = "GetDomainSuggestionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDomainSuggestionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDomainSuggestionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDomainSuggestionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetDomainSuggestionsCommand(input, context);
    };
    GetDomainSuggestionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetDomainSuggestionsCommand(output, context);
    };
    return GetDomainSuggestionsCommand;
}($Command));
export { GetDomainSuggestionsCommand };
//# sourceMappingURL=GetDomainSuggestionsCommand.js.map