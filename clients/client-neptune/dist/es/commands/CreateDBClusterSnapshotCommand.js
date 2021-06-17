import { __extends } from "tslib";
import { CreateDBClusterSnapshotMessage, CreateDBClusterSnapshotResult } from "../models/models_0";
import { deserializeAws_queryCreateDBClusterSnapshotCommand, serializeAws_queryCreateDBClusterSnapshotCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a snapshot of a DB cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, CreateDBClusterSnapshotCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, CreateDBClusterSnapshotCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new CreateDBClusterSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDBClusterSnapshotCommandInput} for command's `input` shape.
 * @see {@link CreateDBClusterSnapshotCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDBClusterSnapshotCommand = /** @class */ (function (_super) {
    __extends(CreateDBClusterSnapshotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDBClusterSnapshotCommand(input) {
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
    CreateDBClusterSnapshotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NeptuneClient";
        var commandName = "CreateDBClusterSnapshotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDBClusterSnapshotMessage.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDBClusterSnapshotResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDBClusterSnapshotCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateDBClusterSnapshotCommand(input, context);
    };
    CreateDBClusterSnapshotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateDBClusterSnapshotCommand(output, context);
    };
    return CreateDBClusterSnapshotCommand;
}($Command));
export { CreateDBClusterSnapshotCommand };
//# sourceMappingURL=CreateDBClusterSnapshotCommand.js.map