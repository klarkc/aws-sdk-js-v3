import { __extends } from "tslib";
import { CreateGroupMembershipRequest, CreateGroupMembershipResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateGroupMembershipCommand, serializeAws_restJson1CreateGroupMembershipCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds an Amazon QuickSight user to an Amazon QuickSight group. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateGroupMembershipCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateGroupMembershipCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new CreateGroupMembershipCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateGroupMembershipCommandInput} for command's `input` shape.
 * @see {@link CreateGroupMembershipCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateGroupMembershipCommand = /** @class */ (function (_super) {
    __extends(CreateGroupMembershipCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateGroupMembershipCommand(input) {
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
    CreateGroupMembershipCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "CreateGroupMembershipCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateGroupMembershipRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateGroupMembershipResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateGroupMembershipCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateGroupMembershipCommand(input, context);
    };
    CreateGroupMembershipCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateGroupMembershipCommand(output, context);
    };
    return CreateGroupMembershipCommand;
}($Command));
export { CreateGroupMembershipCommand };
//# sourceMappingURL=CreateGroupMembershipCommand.js.map