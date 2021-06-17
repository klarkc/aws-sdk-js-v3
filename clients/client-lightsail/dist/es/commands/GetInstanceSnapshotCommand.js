import { __extends } from "tslib";
import { GetInstanceSnapshotRequest, GetInstanceSnapshotResult } from "../models/models_0";
import { deserializeAws_json1_1GetInstanceSnapshotCommand, serializeAws_json1_1GetInstanceSnapshotCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about a specific instance snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetInstanceSnapshotCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetInstanceSnapshotCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetInstanceSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInstanceSnapshotCommandInput} for command's `input` shape.
 * @see {@link GetInstanceSnapshotCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetInstanceSnapshotCommand = /** @class */ (function (_super) {
    __extends(GetInstanceSnapshotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetInstanceSnapshotCommand(input) {
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
    GetInstanceSnapshotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetInstanceSnapshotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetInstanceSnapshotRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetInstanceSnapshotResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetInstanceSnapshotCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetInstanceSnapshotCommand(input, context);
    };
    GetInstanceSnapshotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetInstanceSnapshotCommand(output, context);
    };
    return GetInstanceSnapshotCommand;
}($Command));
export { GetInstanceSnapshotCommand };
//# sourceMappingURL=GetInstanceSnapshotCommand.js.map