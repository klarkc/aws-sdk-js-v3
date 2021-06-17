import { __extends } from "tslib";
import { GetRelationalDatabaseSnapshotRequest, GetRelationalDatabaseSnapshotResult } from "../models/models_1";
import { deserializeAws_json1_1GetRelationalDatabaseSnapshotCommand, serializeAws_json1_1GetRelationalDatabaseSnapshotCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about a specific database snapshot in Amazon Lightsail.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetRelationalDatabaseSnapshotCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetRelationalDatabaseSnapshotCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetRelationalDatabaseSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRelationalDatabaseSnapshotCommandInput} for command's `input` shape.
 * @see {@link GetRelationalDatabaseSnapshotCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRelationalDatabaseSnapshotCommand = /** @class */ (function (_super) {
    __extends(GetRelationalDatabaseSnapshotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetRelationalDatabaseSnapshotCommand(input) {
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
    GetRelationalDatabaseSnapshotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetRelationalDatabaseSnapshotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetRelationalDatabaseSnapshotRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetRelationalDatabaseSnapshotResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetRelationalDatabaseSnapshotCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetRelationalDatabaseSnapshotCommand(input, context);
    };
    GetRelationalDatabaseSnapshotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetRelationalDatabaseSnapshotCommand(output, context);
    };
    return GetRelationalDatabaseSnapshotCommand;
}($Command));
export { GetRelationalDatabaseSnapshotCommand };
//# sourceMappingURL=GetRelationalDatabaseSnapshotCommand.js.map