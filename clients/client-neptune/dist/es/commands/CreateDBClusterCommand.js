import { __extends } from "tslib";
import { CreateDBClusterMessage, CreateDBClusterResult } from "../models/models_0";
import { deserializeAws_queryCreateDBClusterCommand, serializeAws_queryCreateDBClusterCommand, } from "../protocols/Aws_query";
import { getCrossRegionPresignedUrlPlugin } from "@aws-sdk/middleware-sdk-rds";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new Amazon Neptune DB cluster.</p>
 *          <p>You can use the <code>ReplicationSourceIdentifier</code> parameter to create the DB
 *       cluster as a Read Replica of another DB cluster or Amazon Neptune DB instance.</p>
 *          <p>Note that when you create a new cluster using <code>CreateDBCluster</code> directly,
 *       deletion protection is disabled by default (when you create a new production cluster in
 *       the console, deletion protection is enabled by default). You can only delete a DB
 *       cluster if its <code>DeletionProtection</code> field is set to <code>false</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, CreateDBClusterCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, CreateDBClusterCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new CreateDBClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDBClusterCommandInput} for command's `input` shape.
 * @see {@link CreateDBClusterCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDBClusterCommand = /** @class */ (function (_super) {
    __extends(CreateDBClusterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDBClusterCommand(input) {
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
    CreateDBClusterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getCrossRegionPresignedUrlPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NeptuneClient";
        var commandName = "CreateDBClusterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDBClusterMessage.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDBClusterResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDBClusterCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateDBClusterCommand(input, context);
    };
    CreateDBClusterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateDBClusterCommand(output, context);
    };
    return CreateDBClusterCommand;
}($Command));
export { CreateDBClusterCommand };
//# sourceMappingURL=CreateDBClusterCommand.js.map