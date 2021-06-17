import { __extends } from "tslib";
import { ListAliasesInput, ListAliasesOutput } from "../models/models_0";
import { deserializeAws_json1_1ListAliasesCommand, serializeAws_json1_1ListAliasesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves all aliases for this AWS account. You can filter the result set by
 *             alias name and/or routing strategy type. Use the pagination parameters to retrieve
 *             results in sequential pages.</p>
 *         <note>
 *             <p>Returned aliases are not listed in any particular order.</p>
 *         </note>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>CreateAlias</a> |
 *                     <a>ListAliases</a> |
 *                     <a>DescribeAlias</a> |
 *                     <a>UpdateAlias</a> |
 *                     <a>DeleteAlias</a> |
 *                     <a>ResolveAlias</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, ListAliasesCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, ListAliasesCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new ListAliasesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAliasesCommandInput} for command's `input` shape.
 * @see {@link ListAliasesCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAliasesCommand = /** @class */ (function (_super) {
    __extends(ListAliasesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAliasesCommand(input) {
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
    ListAliasesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "ListAliasesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAliasesInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListAliasesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAliasesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListAliasesCommand(input, context);
    };
    ListAliasesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListAliasesCommand(output, context);
    };
    return ListAliasesCommand;
}($Command));
export { ListAliasesCommand };
//# sourceMappingURL=ListAliasesCommand.js.map