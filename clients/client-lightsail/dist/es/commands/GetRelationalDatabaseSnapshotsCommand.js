import { __extends } from "tslib";
import { GetRelationalDatabaseSnapshotsRequest, GetRelationalDatabaseSnapshotsResult } from "../models/models_1";
import { deserializeAws_json1_1GetRelationalDatabaseSnapshotsCommand, serializeAws_json1_1GetRelationalDatabaseSnapshotsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about all of your database snapshots in Amazon Lightsail.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetRelationalDatabaseSnapshotsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetRelationalDatabaseSnapshotsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetRelationalDatabaseSnapshotsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRelationalDatabaseSnapshotsCommandInput} for command's `input` shape.
 * @see {@link GetRelationalDatabaseSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRelationalDatabaseSnapshotsCommand = /** @class */ (function (_super) {
    __extends(GetRelationalDatabaseSnapshotsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetRelationalDatabaseSnapshotsCommand(input) {
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
    GetRelationalDatabaseSnapshotsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetRelationalDatabaseSnapshotsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetRelationalDatabaseSnapshotsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetRelationalDatabaseSnapshotsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetRelationalDatabaseSnapshotsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetRelationalDatabaseSnapshotsCommand(input, context);
    };
    GetRelationalDatabaseSnapshotsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetRelationalDatabaseSnapshotsCommand(output, context);
    };
    return GetRelationalDatabaseSnapshotsCommand;
}($Command));
export { GetRelationalDatabaseSnapshotsCommand };
//# sourceMappingURL=GetRelationalDatabaseSnapshotsCommand.js.map