import { __extends } from "tslib";
import { ListDevEndpointsRequest, ListDevEndpointsResponse } from "../models/models_1";
import { deserializeAws_json1_1ListDevEndpointsCommand, serializeAws_json1_1ListDevEndpointsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the names of all <code>DevEndpoint</code> resources in this AWS account, or the
 *       resources with the specified tag. This operation allows you to see which resources are
 *       available in your account, and their names.</p>
 *
 *          <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on
 *       the response so that tagged resources can be retrieved as a group. If you choose to use tags
 *       filtering, only resources with the tag are retrieved.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListDevEndpointsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListDevEndpointsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new ListDevEndpointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDevEndpointsCommandInput} for command's `input` shape.
 * @see {@link ListDevEndpointsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDevEndpointsCommand = /** @class */ (function (_super) {
    __extends(ListDevEndpointsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDevEndpointsCommand(input) {
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
    ListDevEndpointsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "ListDevEndpointsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDevEndpointsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDevEndpointsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDevEndpointsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListDevEndpointsCommand(input, context);
    };
    ListDevEndpointsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListDevEndpointsCommand(output, context);
    };
    return ListDevEndpointsCommand;
}($Command));
export { ListDevEndpointsCommand };
//# sourceMappingURL=ListDevEndpointsCommand.js.map