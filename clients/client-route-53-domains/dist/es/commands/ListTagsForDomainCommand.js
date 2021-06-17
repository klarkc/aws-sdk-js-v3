import { __extends } from "tslib";
import { ListTagsForDomainRequest, ListTagsForDomainResponse } from "../models/models_0";
import { deserializeAws_json1_1ListTagsForDomainCommand, serializeAws_json1_1ListTagsForDomainCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation returns all of the tags that are associated with the specified domain.</p>
 * 		       <p>All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, ListTagsForDomainCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, ListTagsForDomainCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new ListTagsForDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTagsForDomainCommandInput} for command's `input` shape.
 * @see {@link ListTagsForDomainCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTagsForDomainCommand = /** @class */ (function (_super) {
    __extends(ListTagsForDomainCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTagsForDomainCommand(input) {
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
    ListTagsForDomainCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53DomainsClient";
        var commandName = "ListTagsForDomainCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTagsForDomainRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListTagsForDomainResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTagsForDomainCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListTagsForDomainCommand(input, context);
    };
    ListTagsForDomainCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListTagsForDomainCommand(output, context);
    };
    return ListTagsForDomainCommand;
}($Command));
export { ListTagsForDomainCommand };
//# sourceMappingURL=ListTagsForDomainCommand.js.map