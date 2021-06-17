import { __extends } from "tslib";
import { ListHealthChecksRequest, ListHealthChecksResponse } from "../models/models_0";
import { deserializeAws_restXmlListHealthChecksCommand, serializeAws_restXmlListHealthChecksCommand, } from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieve a list of the health checks that are associated with the current AWS account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListHealthChecksCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListHealthChecksCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new ListHealthChecksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListHealthChecksCommandInput} for command's `input` shape.
 * @see {@link ListHealthChecksCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListHealthChecksCommand = /** @class */ (function (_super) {
    __extends(ListHealthChecksCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListHealthChecksCommand(input) {
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
    ListHealthChecksCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "ListHealthChecksCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListHealthChecksRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListHealthChecksResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListHealthChecksCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlListHealthChecksCommand(input, context);
    };
    ListHealthChecksCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlListHealthChecksCommand(output, context);
    };
    return ListHealthChecksCommand;
}($Command));
export { ListHealthChecksCommand };
//# sourceMappingURL=ListHealthChecksCommand.js.map