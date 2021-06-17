import { __extends } from "tslib";
import { ResizeClusterMessage } from "../models/models_0";
import { ResizeClusterResult } from "../models/models_1";
import { deserializeAws_queryResizeClusterCommand, serializeAws_queryResizeClusterCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Changes the size of the cluster. You can change the cluster's type, or change the
 *             number or type of nodes. The default behavior is to use the elastic resize method. With
 *             an elastic resize, your cluster is available for read and write operations more quickly
 *             than with the classic resize method. </p>
 *         <p>Elastic resize operations have the following restrictions:</p>
 *         <ul>
 *             <li>
 *                 <p>You can only resize clusters of the following types:</p>
 *                 <ul>
 *                   <li>
 *                         <p>dc1.large (if your cluster is in a VPC)</p>
 *                     </li>
 *                   <li>
 *                         <p>dc1.8xlarge (if your cluster is in a VPC)</p>
 *                     </li>
 *                   <li>
 *                         <p>dc2.large</p>
 *                     </li>
 *                   <li>
 *                         <p>dc2.8xlarge</p>
 *                     </li>
 *                   <li>
 *                         <p>ds2.xlarge</p>
 *                     </li>
 *                   <li>
 *                         <p>ds2.8xlarge</p>
 *                     </li>
 *                   <li>
 *                         <p>ra3.xlplus</p>
 *                     </li>
 *                   <li>
 *                         <p>ra3.4xlarge</p>
 *                     </li>
 *                   <li>
 *                         <p>ra3.16xlarge</p>
 *                     </li>
 *                </ul>
 *             </li>
 *             <li>
 *                 <p>The type of nodes that you add must match the node type for the
 *                     cluster.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ResizeClusterCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ResizeClusterCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new ResizeClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResizeClusterCommandInput} for command's `input` shape.
 * @see {@link ResizeClusterCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ResizeClusterCommand = /** @class */ (function (_super) {
    __extends(ResizeClusterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ResizeClusterCommand(input) {
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
    ResizeClusterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "ResizeClusterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ResizeClusterMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ResizeClusterResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ResizeClusterCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryResizeClusterCommand(input, context);
    };
    ResizeClusterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryResizeClusterCommand(output, context);
    };
    return ResizeClusterCommand;
}($Command));
export { ResizeClusterCommand };
//# sourceMappingURL=ResizeClusterCommand.js.map