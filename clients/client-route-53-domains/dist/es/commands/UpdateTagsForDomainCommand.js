import { __extends } from "tslib";
import { UpdateTagsForDomainRequest, UpdateTagsForDomainResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateTagsForDomainCommand, serializeAws_json1_1UpdateTagsForDomainCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation adds or updates tags for a specified domain.</p>
 * 		       <p>All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, UpdateTagsForDomainCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, UpdateTagsForDomainCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new UpdateTagsForDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTagsForDomainCommandInput} for command's `input` shape.
 * @see {@link UpdateTagsForDomainCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateTagsForDomainCommand = /** @class */ (function (_super) {
    __extends(UpdateTagsForDomainCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateTagsForDomainCommand(input) {
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
    UpdateTagsForDomainCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53DomainsClient";
        var commandName = "UpdateTagsForDomainCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateTagsForDomainRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateTagsForDomainResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateTagsForDomainCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateTagsForDomainCommand(input, context);
    };
    UpdateTagsForDomainCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateTagsForDomainCommand(output, context);
    };
    return UpdateTagsForDomainCommand;
}($Command));
export { UpdateTagsForDomainCommand };
//# sourceMappingURL=UpdateTagsForDomainCommand.js.map