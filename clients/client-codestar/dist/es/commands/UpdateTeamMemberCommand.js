import { __extends } from "tslib";
import { UpdateTeamMemberRequest, UpdateTeamMemberResult } from "../models/models_0";
import { deserializeAws_json1_1UpdateTeamMemberCommand, serializeAws_json1_1UpdateTeamMemberCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a team member's attributes in an AWS CodeStar project. For example, you can change a
 *       team member's role in the project, or change whether they have remote access to project
 *       resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarClient, UpdateTeamMemberCommand } from "@aws-sdk/client-codestar"; // ES Modules import
 * // const { CodeStarClient, UpdateTeamMemberCommand } = require("@aws-sdk/client-codestar"); // CommonJS import
 * const client = new CodeStarClient(config);
 * const command = new UpdateTeamMemberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTeamMemberCommandInput} for command's `input` shape.
 * @see {@link UpdateTeamMemberCommandOutput} for command's `response` shape.
 * @see {@link CodeStarClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateTeamMemberCommand = /** @class */ (function (_super) {
    __extends(UpdateTeamMemberCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateTeamMemberCommand(input) {
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
    UpdateTeamMemberCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeStarClient";
        var commandName = "UpdateTeamMemberCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateTeamMemberRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateTeamMemberResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateTeamMemberCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateTeamMemberCommand(input, context);
    };
    UpdateTeamMemberCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateTeamMemberCommand(output, context);
    };
    return UpdateTeamMemberCommand;
}($Command));
export { UpdateTeamMemberCommand };
//# sourceMappingURL=UpdateTeamMemberCommand.js.map