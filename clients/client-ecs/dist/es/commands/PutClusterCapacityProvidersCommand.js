import { __extends } from "tslib";
import { PutClusterCapacityProvidersRequest, PutClusterCapacityProvidersResponse } from "../models/models_0";
import { deserializeAws_json1_1PutClusterCapacityProvidersCommand, serializeAws_json1_1PutClusterCapacityProvidersCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the available capacity providers and the default capacity provider strategy
 * 			for a cluster.</p>
 * 		       <p>You must specify both the available capacity providers and a default capacity provider
 * 			strategy for the cluster. If the specified cluster has existing capacity providers
 * 			associated with it, you must specify all existing capacity providers in addition to any
 * 			new ones you want to add. Any existing capacity providers associated with a cluster that
 * 			are omitted from a <a>PutClusterCapacityProviders</a> API call will be
 * 			disassociated with the cluster. You can only disassociate an existing capacity provider
 * 			from a cluster if it's not being used by any existing tasks.</p>
 * 		       <p>When creating a service or running a task on a cluster, if no capacity provider or
 * 			launch type is specified, then the cluster's default capacity provider strategy is used.
 * 			It is recommended to define a default capacity provider strategy for your cluster,
 * 			however you may specify an empty array (<code>[]</code>) to bypass defining a default
 * 			strategy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, PutClusterCapacityProvidersCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, PutClusterCapacityProvidersCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new PutClusterCapacityProvidersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutClusterCapacityProvidersCommandInput} for command's `input` shape.
 * @see {@link PutClusterCapacityProvidersCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutClusterCapacityProvidersCommand = /** @class */ (function (_super) {
    __extends(PutClusterCapacityProvidersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutClusterCapacityProvidersCommand(input) {
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
    PutClusterCapacityProvidersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECSClient";
        var commandName = "PutClusterCapacityProvidersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutClusterCapacityProvidersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutClusterCapacityProvidersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutClusterCapacityProvidersCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutClusterCapacityProvidersCommand(input, context);
    };
    PutClusterCapacityProvidersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutClusterCapacityProvidersCommand(output, context);
    };
    return PutClusterCapacityProvidersCommand;
}($Command));
export { PutClusterCapacityProvidersCommand };
//# sourceMappingURL=PutClusterCapacityProvidersCommand.js.map