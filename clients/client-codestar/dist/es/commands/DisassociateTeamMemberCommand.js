import { __extends } from "tslib";
import { DisassociateTeamMemberRequest, DisassociateTeamMemberResult } from "../models/models_0";
import { deserializeAws_json1_1DisassociateTeamMemberCommand, serializeAws_json1_1DisassociateTeamMemberCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes a user from a project. Removing a user from a project also removes the IAM
 *       policies from that user that allowed access to the project and its resources. Disassociating a
 *       team member does not remove that user's profile from AWS CodeStar. It does not remove the user from
 *       IAM.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarClient, DisassociateTeamMemberCommand } from "@aws-sdk/client-codestar"; // ES Modules import
 * // const { CodeStarClient, DisassociateTeamMemberCommand } = require("@aws-sdk/client-codestar"); // CommonJS import
 * const client = new CodeStarClient(config);
 * const command = new DisassociateTeamMemberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateTeamMemberCommandInput} for command's `input` shape.
 * @see {@link DisassociateTeamMemberCommandOutput} for command's `response` shape.
 * @see {@link CodeStarClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateTeamMemberCommand = /** @class */ (function (_super) {
    __extends(DisassociateTeamMemberCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateTeamMemberCommand(input) {
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
    DisassociateTeamMemberCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeStarClient";
        var commandName = "DisassociateTeamMemberCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateTeamMemberRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateTeamMemberResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateTeamMemberCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DisassociateTeamMemberCommand(input, context);
    };
    DisassociateTeamMemberCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DisassociateTeamMemberCommand(output, context);
    };
    return DisassociateTeamMemberCommand;
}($Command));
export { DisassociateTeamMemberCommand };
//# sourceMappingURL=DisassociateTeamMemberCommand.js.map