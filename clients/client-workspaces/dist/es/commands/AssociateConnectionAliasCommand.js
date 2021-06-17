import { __extends } from "tslib";
import { AssociateConnectionAliasRequest, AssociateConnectionAliasResult } from "../models/models_0";
import { deserializeAws_json1_1AssociateConnectionAliasCommand, serializeAws_json1_1AssociateConnectionAliasCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates the specified connection alias with the specified directory to enable cross-Region redirection.
 *          For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html">
 *             Cross-Region Redirection for Amazon WorkSpaces</a>.</p>
 *
 *          <note>
 *             <p>Before performing this operation, call <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliases.html">
 *             DescribeConnectionAliases</a> to make sure that the current state of the connection alias is <code>CREATED</code>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, AssociateConnectionAliasCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, AssociateConnectionAliasCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new AssociateConnectionAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateConnectionAliasCommandInput} for command's `input` shape.
 * @see {@link AssociateConnectionAliasCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateConnectionAliasCommand = /** @class */ (function (_super) {
    __extends(AssociateConnectionAliasCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateConnectionAliasCommand(input) {
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
    AssociateConnectionAliasCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkSpacesClient";
        var commandName = "AssociateConnectionAliasCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateConnectionAliasRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateConnectionAliasResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateConnectionAliasCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AssociateConnectionAliasCommand(input, context);
    };
    AssociateConnectionAliasCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AssociateConnectionAliasCommand(output, context);
    };
    return AssociateConnectionAliasCommand;
}($Command));
export { AssociateConnectionAliasCommand };
//# sourceMappingURL=AssociateConnectionAliasCommand.js.map