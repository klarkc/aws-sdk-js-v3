import { __extends } from "tslib";
import { DeleteDBClusterMessage, DeleteDBClusterResult } from "../models/models_0";
import { deserializeAws_queryDeleteDBClusterCommand, serializeAws_queryDeleteDBClusterCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>The DeleteDBCluster action deletes a previously provisioned DB cluster.
 *           When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered.
 *           Manual DB cluster snapshots of the specified DB cluster are not deleted.</p>
 *          <p></p>
 *          <p>For more information on Amazon Aurora, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
 *               What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i>
 *          </p>
 *          <note>
 *             <p>This action only applies to Aurora DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteDBClusterCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteDBClusterCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DeleteDBClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDBClusterCommandInput} for command's `input` shape.
 * @see {@link DeleteDBClusterCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDBClusterCommand = /** @class */ (function (_super) {
    __extends(DeleteDBClusterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteDBClusterCommand(input) {
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
    DeleteDBClusterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "DeleteDBClusterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDBClusterMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteDBClusterResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDBClusterCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteDBClusterCommand(input, context);
    };
    DeleteDBClusterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteDBClusterCommand(output, context);
    };
    return DeleteDBClusterCommand;
}($Command));
export { DeleteDBClusterCommand };
//# sourceMappingURL=DeleteDBClusterCommand.js.map