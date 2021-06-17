import { __extends } from "tslib";
import { ListUserProfilesRequest, ListUserProfilesResult } from "../models/models_0";
import { deserializeAws_json1_1ListUserProfilesCommand, serializeAws_json1_1ListUserProfilesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all the user profiles configured for your AWS account in AWS CodeStar.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarClient, ListUserProfilesCommand } from "@aws-sdk/client-codestar"; // ES Modules import
 * // const { CodeStarClient, ListUserProfilesCommand } = require("@aws-sdk/client-codestar"); // CommonJS import
 * const client = new CodeStarClient(config);
 * const command = new ListUserProfilesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListUserProfilesCommandInput} for command's `input` shape.
 * @see {@link ListUserProfilesCommandOutput} for command's `response` shape.
 * @see {@link CodeStarClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListUserProfilesCommand = /** @class */ (function (_super) {
    __extends(ListUserProfilesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListUserProfilesCommand(input) {
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
    ListUserProfilesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeStarClient";
        var commandName = "ListUserProfilesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListUserProfilesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListUserProfilesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListUserProfilesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListUserProfilesCommand(input, context);
    };
    ListUserProfilesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListUserProfilesCommand(output, context);
    };
    return ListUserProfilesCommand;
}($Command));
export { ListUserProfilesCommand };
//# sourceMappingURL=ListUserProfilesCommand.js.map