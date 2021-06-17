import { __extends } from "tslib";
import { DeleteConnectionAliasRequest, DeleteConnectionAliasResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteConnectionAliasCommand, serializeAws_json1_1DeleteConnectionAliasCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified connection alias. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html">
 *          Cross-Region Redirection for Amazon WorkSpaces</a>.</p>
 *
 *          <important>
 *             <p>
 *                <b>If you will no longer be using a fully qualified domain name (FQDN) as the registration code
 *             for your WorkSpaces users, you must take certain precautions to prevent potential security issues.</b>
 *             For more information, see
 *             <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html#cross-region-redirection-security-considerations">
 *                Security Considerations if You Stop Using Cross-Region Redirection</a>.</p>
 *          </important>
 *
 *          <note>
 *             <p>To delete a connection alias that has been shared, the shared account must first disassociate the connection alias
 *             from any directories it has been associated with. Then you must unshare the connection alias from the account it has
 *             been shared with. You can delete a connection alias only after it is no longer shared with any accounts or
 *             associated with any directories.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DeleteConnectionAliasCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DeleteConnectionAliasCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new DeleteConnectionAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteConnectionAliasCommandInput} for command's `input` shape.
 * @see {@link DeleteConnectionAliasCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteConnectionAliasCommand = /** @class */ (function (_super) {
    __extends(DeleteConnectionAliasCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteConnectionAliasCommand(input) {
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
    DeleteConnectionAliasCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkSpacesClient";
        var commandName = "DeleteConnectionAliasCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteConnectionAliasRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteConnectionAliasResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteConnectionAliasCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteConnectionAliasCommand(input, context);
    };
    DeleteConnectionAliasCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteConnectionAliasCommand(output, context);
    };
    return DeleteConnectionAliasCommand;
}($Command));
export { DeleteConnectionAliasCommand };
//# sourceMappingURL=DeleteConnectionAliasCommand.js.map