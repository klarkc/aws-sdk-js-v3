import { __extends } from "tslib";
import { CreateDBSnapshotMessage, CreateDBSnapshotResult } from "../models/models_0";
import { deserializeAws_queryCreateDBSnapshotCommand, serializeAws_queryCreateDBSnapshotCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a snapshot of a DB instance. The source DB instance must be in the <code>available</code> or
 *                 <code>storage-optimization</code> state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateDBSnapshotCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateDBSnapshotCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new CreateDBSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDBSnapshotCommandInput} for command's `input` shape.
 * @see {@link CreateDBSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDBSnapshotCommand = /** @class */ (function (_super) {
    __extends(CreateDBSnapshotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDBSnapshotCommand(input) {
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
    CreateDBSnapshotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "CreateDBSnapshotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDBSnapshotMessage.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDBSnapshotResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDBSnapshotCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateDBSnapshotCommand(input, context);
    };
    CreateDBSnapshotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateDBSnapshotCommand(output, context);
    };
    return CreateDBSnapshotCommand;
}($Command));
export { CreateDBSnapshotCommand };
//# sourceMappingURL=CreateDBSnapshotCommand.js.map