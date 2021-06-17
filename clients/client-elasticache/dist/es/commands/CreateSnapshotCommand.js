import { __extends } from "tslib";
import { CreateSnapshotMessage, CreateSnapshotResult } from "../models/models_0";
import { deserializeAws_queryCreateSnapshotCommand, serializeAws_queryCreateSnapshotCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a copy of an entire cluster or replication group at a
 *             specific moment in time.</p>
 *
 *         <note>
 *             <p>This operation is valid for Redis only.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, CreateSnapshotCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, CreateSnapshotCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new CreateSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSnapshotCommandInput} for command's `input` shape.
 * @see {@link CreateSnapshotCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateSnapshotCommand = /** @class */ (function (_super) {
    __extends(CreateSnapshotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateSnapshotCommand(input) {
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
    CreateSnapshotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElastiCacheClient";
        var commandName = "CreateSnapshotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateSnapshotMessage.filterSensitiveLog,
            outputFilterSensitiveLog: CreateSnapshotResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateSnapshotCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateSnapshotCommand(input, context);
    };
    CreateSnapshotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateSnapshotCommand(output, context);
    };
    return CreateSnapshotCommand;
}($Command));
export { CreateSnapshotCommand };
//# sourceMappingURL=CreateSnapshotCommand.js.map