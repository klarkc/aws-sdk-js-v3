import { __extends } from "tslib";
import { DescribeAliasInput, DescribeAliasOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeAliasCommand, serializeAws_json1_1DescribeAliasCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves properties for an alias. This operation returns all alias metadata and
 *             settings. To get an alias's target fleet ID only, use <code>ResolveAlias</code>. </p>
 *         <p>To get alias properties, specify the alias ID. If successful, the requested alias
 *             record is returned.</p>
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
 * import { GameLiftClient, DescribeAliasCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeAliasCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribeAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAliasCommandInput} for command's `input` shape.
 * @see {@link DescribeAliasCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAliasCommand = /** @class */ (function (_super) {
    __extends(DescribeAliasCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAliasCommand(input) {
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
    DescribeAliasCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "DescribeAliasCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAliasInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAliasOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAliasCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeAliasCommand(input, context);
    };
    DescribeAliasCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeAliasCommand(output, context);
    };
    return DescribeAliasCommand;
}($Command));
export { DescribeAliasCommand };
//# sourceMappingURL=DescribeAliasCommand.js.map