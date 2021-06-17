import { __extends } from "tslib";
import { ModifyClusterIamRolesMessage, ModifyClusterIamRolesResult } from "../models/models_1";
import { deserializeAws_queryModifyClusterIamRolesCommand, serializeAws_queryModifyClusterIamRolesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the list of AWS Identity and Access Management (IAM) roles that can be
 *             used by the cluster to access other AWS services.</p>
 *         <p>A cluster can have up to 10 IAM roles associated at any time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifyClusterIamRolesCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifyClusterIamRolesCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new ModifyClusterIamRolesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyClusterIamRolesCommandInput} for command's `input` shape.
 * @see {@link ModifyClusterIamRolesCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyClusterIamRolesCommand = /** @class */ (function (_super) {
    __extends(ModifyClusterIamRolesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyClusterIamRolesCommand(input) {
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
    ModifyClusterIamRolesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "ModifyClusterIamRolesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyClusterIamRolesMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyClusterIamRolesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyClusterIamRolesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryModifyClusterIamRolesCommand(input, context);
    };
    ModifyClusterIamRolesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryModifyClusterIamRolesCommand(output, context);
    };
    return ModifyClusterIamRolesCommand;
}($Command));
export { ModifyClusterIamRolesCommand };
//# sourceMappingURL=ModifyClusterIamRolesCommand.js.map