import { __extends } from "tslib";
import { ListManagedEndpointsRequest, ListManagedEndpointsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListManagedEndpointsCommand, serializeAws_restJson1ListManagedEndpointsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists managed endpoints based on a set of parameters. A managed endpoint is a gateway that connects EMR Studio to Amazon EMR on EKS so that EMR Studio can communicate with your virtual cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, ListManagedEndpointsCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, ListManagedEndpointsCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * const client = new EMRContainersClient(config);
 * const command = new ListManagedEndpointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListManagedEndpointsCommandInput} for command's `input` shape.
 * @see {@link ListManagedEndpointsCommandOutput} for command's `response` shape.
 * @see {@link EMRContainersClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListManagedEndpointsCommand = /** @class */ (function (_super) {
    __extends(ListManagedEndpointsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListManagedEndpointsCommand(input) {
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
    ListManagedEndpointsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EMRContainersClient";
        var commandName = "ListManagedEndpointsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListManagedEndpointsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListManagedEndpointsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListManagedEndpointsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListManagedEndpointsCommand(input, context);
    };
    ListManagedEndpointsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListManagedEndpointsCommand(output, context);
    };
    return ListManagedEndpointsCommand;
}($Command));
export { ListManagedEndpointsCommand };
//# sourceMappingURL=ListManagedEndpointsCommand.js.map