import { __extends } from "tslib";
import { CreateGlobalClusterMessage, CreateGlobalClusterResult } from "../models/models_0";
import { deserializeAws_queryCreateGlobalClusterCommand, serializeAws_queryCreateGlobalClusterCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *         Creates an Aurora global database
 *         spread across multiple AWS Regions. The global database
 *         contains a single primary cluster with read-write capability,
 *         and a read-only secondary cluster that receives
 *         data from the primary cluster through high-speed replication
 *         performed by the Aurora storage subsystem.
 *       </p>
 *          <p>
 *         You can create a global database that is initially empty, and then
 *         add a primary cluster and a secondary cluster to it.
 *         Or you can specify an existing Aurora cluster during the create operation,
 *         and this cluster becomes the primary cluster of the global database.
 *       </p>
 *          <note>
 *            <p>This action only applies to Aurora DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateGlobalClusterCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateGlobalClusterCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new CreateGlobalClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateGlobalClusterCommandInput} for command's `input` shape.
 * @see {@link CreateGlobalClusterCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateGlobalClusterCommand = /** @class */ (function (_super) {
    __extends(CreateGlobalClusterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateGlobalClusterCommand(input) {
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
    CreateGlobalClusterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "CreateGlobalClusterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateGlobalClusterMessage.filterSensitiveLog,
            outputFilterSensitiveLog: CreateGlobalClusterResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateGlobalClusterCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateGlobalClusterCommand(input, context);
    };
    CreateGlobalClusterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateGlobalClusterCommand(output, context);
    };
    return CreateGlobalClusterCommand;
}($Command));
export { CreateGlobalClusterCommand };
//# sourceMappingURL=CreateGlobalClusterCommand.js.map