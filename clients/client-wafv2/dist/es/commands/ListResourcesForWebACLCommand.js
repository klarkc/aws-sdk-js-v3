import { __extends } from "tslib";
import { ListResourcesForWebACLRequest, ListResourcesForWebACLResponse } from "../models/models_0";
import { deserializeAws_json1_1ListResourcesForWebACLCommand, serializeAws_json1_1ListResourcesForWebACLCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves an array of the Amazon Resource Names (ARNs) for the regional resources that are associated with the specified web ACL. If you want the list of AWS CloudFront resources, use the AWS CloudFront call <code>ListDistributionsByWebACLId</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, ListResourcesForWebACLCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, ListResourcesForWebACLCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new ListResourcesForWebACLCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResourcesForWebACLCommandInput} for command's `input` shape.
 * @see {@link ListResourcesForWebACLCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListResourcesForWebACLCommand = /** @class */ (function (_super) {
    __extends(ListResourcesForWebACLCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListResourcesForWebACLCommand(input) {
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
    ListResourcesForWebACLCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFV2Client";
        var commandName = "ListResourcesForWebACLCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListResourcesForWebACLRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListResourcesForWebACLResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListResourcesForWebACLCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListResourcesForWebACLCommand(input, context);
    };
    ListResourcesForWebACLCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListResourcesForWebACLCommand(output, context);
    };
    return ListResourcesForWebACLCommand;
}($Command));
export { ListResourcesForWebACLCommand };
//# sourceMappingURL=ListResourcesForWebACLCommand.js.map