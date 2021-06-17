import { __extends } from "tslib";
import { CreateUserHierarchyGroupRequest, CreateUserHierarchyGroupResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateUserHierarchyGroupCommand, serializeAws_restJson1CreateUserHierarchyGroupCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new user hierarchy group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateUserHierarchyGroupCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateUserHierarchyGroupCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new CreateUserHierarchyGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateUserHierarchyGroupCommandInput} for command's `input` shape.
 * @see {@link CreateUserHierarchyGroupCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateUserHierarchyGroupCommand = /** @class */ (function (_super) {
    __extends(CreateUserHierarchyGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateUserHierarchyGroupCommand(input) {
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
    CreateUserHierarchyGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "CreateUserHierarchyGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateUserHierarchyGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateUserHierarchyGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateUserHierarchyGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateUserHierarchyGroupCommand(input, context);
    };
    CreateUserHierarchyGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateUserHierarchyGroupCommand(output, context);
    };
    return CreateUserHierarchyGroupCommand;
}($Command));
export { CreateUserHierarchyGroupCommand };
//# sourceMappingURL=CreateUserHierarchyGroupCommand.js.map