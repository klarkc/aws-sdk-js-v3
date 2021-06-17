import { __extends } from "tslib";
import { AssociateTeamMemberRequest, AssociateTeamMemberResult } from "../models/models_0";
import { deserializeAws_json1_1AssociateTeamMemberCommand, serializeAws_json1_1AssociateTeamMemberCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds an IAM user to the team for an AWS CodeStar project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarClient, AssociateTeamMemberCommand } from "@aws-sdk/client-codestar"; // ES Modules import
 * // const { CodeStarClient, AssociateTeamMemberCommand } = require("@aws-sdk/client-codestar"); // CommonJS import
 * const client = new CodeStarClient(config);
 * const command = new AssociateTeamMemberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateTeamMemberCommandInput} for command's `input` shape.
 * @see {@link AssociateTeamMemberCommandOutput} for command's `response` shape.
 * @see {@link CodeStarClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateTeamMemberCommand = /** @class */ (function (_super) {
    __extends(AssociateTeamMemberCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateTeamMemberCommand(input) {
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
    AssociateTeamMemberCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeStarClient";
        var commandName = "AssociateTeamMemberCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateTeamMemberRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateTeamMemberResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateTeamMemberCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AssociateTeamMemberCommand(input, context);
    };
    AssociateTeamMemberCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AssociateTeamMemberCommand(output, context);
    };
    return AssociateTeamMemberCommand;
}($Command));
export { AssociateTeamMemberCommand };
//# sourceMappingURL=AssociateTeamMemberCommand.js.map