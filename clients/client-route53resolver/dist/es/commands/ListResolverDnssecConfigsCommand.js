import { __extends } from "tslib";
import { ListResolverDnssecConfigsRequest, ListResolverDnssecConfigsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListResolverDnssecConfigsCommand, serializeAws_json1_1ListResolverDnssecConfigsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the configurations for DNSSEC validation that are associated with the current AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ListResolverDnssecConfigsCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ListResolverDnssecConfigsCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new ListResolverDnssecConfigsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResolverDnssecConfigsCommandInput} for command's `input` shape.
 * @see {@link ListResolverDnssecConfigsCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListResolverDnssecConfigsCommand = /** @class */ (function (_super) {
    __extends(ListResolverDnssecConfigsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListResolverDnssecConfigsCommand(input) {
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
    ListResolverDnssecConfigsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53ResolverClient";
        var commandName = "ListResolverDnssecConfigsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListResolverDnssecConfigsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListResolverDnssecConfigsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListResolverDnssecConfigsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListResolverDnssecConfigsCommand(input, context);
    };
    ListResolverDnssecConfigsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListResolverDnssecConfigsCommand(output, context);
    };
    return ListResolverDnssecConfigsCommand;
}($Command));
export { ListResolverDnssecConfigsCommand };
//# sourceMappingURL=ListResolverDnssecConfigsCommand.js.map