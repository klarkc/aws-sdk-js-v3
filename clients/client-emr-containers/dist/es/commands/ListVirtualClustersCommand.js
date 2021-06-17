import { __extends } from "tslib";
import { ListVirtualClustersRequest, ListVirtualClustersResponse } from "../models/models_0";
import { deserializeAws_restJson1ListVirtualClustersCommand, serializeAws_restJson1ListVirtualClustersCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists information about the specified virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, ListVirtualClustersCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, ListVirtualClustersCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * const client = new EMRContainersClient(config);
 * const command = new ListVirtualClustersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListVirtualClustersCommandInput} for command's `input` shape.
 * @see {@link ListVirtualClustersCommandOutput} for command's `response` shape.
 * @see {@link EMRContainersClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListVirtualClustersCommand = /** @class */ (function (_super) {
    __extends(ListVirtualClustersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListVirtualClustersCommand(input) {
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
    ListVirtualClustersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EMRContainersClient";
        var commandName = "ListVirtualClustersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListVirtualClustersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListVirtualClustersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListVirtualClustersCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListVirtualClustersCommand(input, context);
    };
    ListVirtualClustersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListVirtualClustersCommand(output, context);
    };
    return ListVirtualClustersCommand;
}($Command));
export { ListVirtualClustersCommand };
//# sourceMappingURL=ListVirtualClustersCommand.js.map