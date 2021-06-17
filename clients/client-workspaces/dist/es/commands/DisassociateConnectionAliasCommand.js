import { __extends } from "tslib";
import { DisassociateConnectionAliasRequest, DisassociateConnectionAliasResult } from "../models/models_0";
import { deserializeAws_json1_1DisassociateConnectionAliasCommand, serializeAws_json1_1DisassociateConnectionAliasCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates a connection alias from a directory. Disassociating a connection alias disables cross-Region
 *          redirection between two directories in different AWS Regions. For more information, see
 *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html">
 *             Cross-Region Redirection for Amazon WorkSpaces</a>.</p>
 *
 *          <note>
 *             <p>Before performing this operation, call <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliases.html">
 *             DescribeConnectionAliases</a> to make sure that the current state of the connection alias is <code>CREATED</code>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DisassociateConnectionAliasCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DisassociateConnectionAliasCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new DisassociateConnectionAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateConnectionAliasCommandInput} for command's `input` shape.
 * @see {@link DisassociateConnectionAliasCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateConnectionAliasCommand = /** @class */ (function (_super) {
    __extends(DisassociateConnectionAliasCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateConnectionAliasCommand(input) {
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
    DisassociateConnectionAliasCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkSpacesClient";
        var commandName = "DisassociateConnectionAliasCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateConnectionAliasRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateConnectionAliasResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateConnectionAliasCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DisassociateConnectionAliasCommand(input, context);
    };
    DisassociateConnectionAliasCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DisassociateConnectionAliasCommand(output, context);
    };
    return DisassociateConnectionAliasCommand;
}($Command));
export { DisassociateConnectionAliasCommand };
//# sourceMappingURL=DisassociateConnectionAliasCommand.js.map