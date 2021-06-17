import { __extends } from "tslib";
import { ListTeamMembersRequest, ListTeamMembersResult } from "../models/models_0";
import { deserializeAws_json1_1ListTeamMembersCommand, serializeAws_json1_1ListTeamMembersCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all team members associated with a project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarClient, ListTeamMembersCommand } from "@aws-sdk/client-codestar"; // ES Modules import
 * // const { CodeStarClient, ListTeamMembersCommand } = require("@aws-sdk/client-codestar"); // CommonJS import
 * const client = new CodeStarClient(config);
 * const command = new ListTeamMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTeamMembersCommandInput} for command's `input` shape.
 * @see {@link ListTeamMembersCommandOutput} for command's `response` shape.
 * @see {@link CodeStarClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTeamMembersCommand = /** @class */ (function (_super) {
    __extends(ListTeamMembersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTeamMembersCommand(input) {
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
    ListTeamMembersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeStarClient";
        var commandName = "ListTeamMembersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTeamMembersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListTeamMembersResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTeamMembersCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListTeamMembersCommand(input, context);
    };
    ListTeamMembersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListTeamMembersCommand(output, context);
    };
    return ListTeamMembersCommand;
}($Command));
export { ListTeamMembersCommand };
//# sourceMappingURL=ListTeamMembersCommand.js.map