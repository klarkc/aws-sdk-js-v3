import { __extends } from "tslib";
import { CreateNamespaceRequest, CreateNamespaceResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateNamespaceCommand, serializeAws_restJson1CreateNamespaceCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>(Enterprise edition only) Creates a new namespace for you to use with Amazon QuickSight.</p>
 *         <p>A namespace allows you to isolate the QuickSight users and groups that are registered
 *             for that namespace. Users that access the namespace can share assets only with other
 *             users or groups in the same namespace. They can't see users and groups in other
 *             namespaces. You can create a namespace after your AWS account is subscribed to
 *             QuickSight. The namespace must be unique within the AWS account. By default, there is a
 *             limit of 100 namespaces per AWS account. To increase your limit, create a ticket with
 *             AWS Support. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateNamespaceCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateNamespaceCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new CreateNamespaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateNamespaceCommandInput} for command's `input` shape.
 * @see {@link CreateNamespaceCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateNamespaceCommand = /** @class */ (function (_super) {
    __extends(CreateNamespaceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateNamespaceCommand(input) {
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
    CreateNamespaceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "CreateNamespaceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateNamespaceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateNamespaceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateNamespaceCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateNamespaceCommand(input, context);
    };
    CreateNamespaceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateNamespaceCommand(output, context);
    };
    return CreateNamespaceCommand;
}($Command));
export { CreateNamespaceCommand };
//# sourceMappingURL=CreateNamespaceCommand.js.map