import { __extends } from "tslib";
import { ListTagsForResourceRequest, ListTagsForResourceResponse } from "../models/models_0";
import { deserializeAws_json1_0ListTagsForResourceCommand, serializeAws_json1_0ListTagsForResourceCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the tags associated with the specified resource. Tags are key:value pairs that
 *          you can use to categorize and manage your resources, for purposes like billing. For
 *          example, you might set the tag key to "customer" and the value to the customer name or ID.
 *          You can specify one or more tags to add to each AWS resource, up to 50 tags for a
 *          resource.</p>
 *          <p>You can tag the AWS resources that you manage through AWS Network Firewall: firewalls, firewall
 *          policies, and rule groups. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, ListTagsForResourceCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, ListTagsForResourceCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new ListTagsForResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTagsForResourceCommandInput} for command's `input` shape.
 * @see {@link ListTagsForResourceCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTagsForResourceCommand = /** @class */ (function (_super) {
    __extends(ListTagsForResourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTagsForResourceCommand(input) {
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
    ListTagsForResourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NetworkFirewallClient";
        var commandName = "ListTagsForResourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTagsForResourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListTagsForResourceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTagsForResourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0ListTagsForResourceCommand(input, context);
    };
    ListTagsForResourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0ListTagsForResourceCommand(output, context);
    };
    return ListTagsForResourceCommand;
}($Command));
export { ListTagsForResourceCommand };
//# sourceMappingURL=ListTagsForResourceCommand.js.map