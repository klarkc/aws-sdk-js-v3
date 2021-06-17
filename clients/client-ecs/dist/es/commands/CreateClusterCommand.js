import { __extends } from "tslib";
import { CreateClusterRequest, CreateClusterResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateClusterCommand, serializeAws_json1_1CreateClusterCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new Amazon ECS cluster. By default, your account receives a <code>default</code>
 * 			cluster when you launch your first container instance. However, you can create your own
 * 			cluster with a unique name with the <code>CreateCluster</code> action.</p>
 * 		       <note>
 * 			         <p>When you call the <a>CreateCluster</a> API operation, Amazon ECS attempts to
 * 				create the Amazon ECS service-linked role for your account so that required resources in
 * 				other AWS services can be managed on your behalf. However, if the IAM user that
 * 				makes the call does not have permissions to create the service-linked role, it is
 * 				not created. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using-service-linked-roles.html">Using
 * 					Service-Linked Roles for Amazon ECS</a> in the
 * 					<i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, CreateClusterCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, CreateClusterCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new CreateClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateClusterCommandInput} for command's `input` shape.
 * @see {@link CreateClusterCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateClusterCommand = /** @class */ (function (_super) {
    __extends(CreateClusterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateClusterCommand(input) {
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
    CreateClusterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECSClient";
        var commandName = "CreateClusterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateClusterRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateClusterResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateClusterCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateClusterCommand(input, context);
    };
    CreateClusterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateClusterCommand(output, context);
    };
    return CreateClusterCommand;
}($Command));
export { CreateClusterCommand };
//# sourceMappingURL=CreateClusterCommand.js.map