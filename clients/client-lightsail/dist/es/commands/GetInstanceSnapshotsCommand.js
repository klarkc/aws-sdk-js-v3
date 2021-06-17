import { __extends } from "tslib";
import { GetInstanceSnapshotsRequest, GetInstanceSnapshotsResult } from "../models/models_0";
import { deserializeAws_json1_1GetInstanceSnapshotsCommand, serializeAws_json1_1GetInstanceSnapshotsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns all instance snapshots for the user's account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetInstanceSnapshotsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetInstanceSnapshotsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetInstanceSnapshotsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInstanceSnapshotsCommandInput} for command's `input` shape.
 * @see {@link GetInstanceSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetInstanceSnapshotsCommand = /** @class */ (function (_super) {
    __extends(GetInstanceSnapshotsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetInstanceSnapshotsCommand(input) {
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
    GetInstanceSnapshotsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetInstanceSnapshotsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetInstanceSnapshotsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetInstanceSnapshotsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetInstanceSnapshotsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetInstanceSnapshotsCommand(input, context);
    };
    GetInstanceSnapshotsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetInstanceSnapshotsCommand(output, context);
    };
    return GetInstanceSnapshotsCommand;
}($Command));
export { GetInstanceSnapshotsCommand };
//# sourceMappingURL=GetInstanceSnapshotsCommand.js.map