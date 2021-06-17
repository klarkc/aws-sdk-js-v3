import { __extends } from "tslib";
import { GetDiskSnapshotRequest, GetDiskSnapshotResult } from "../models/models_0";
import { deserializeAws_json1_1GetDiskSnapshotCommand, serializeAws_json1_1GetDiskSnapshotCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about a specific block storage disk snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetDiskSnapshotCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetDiskSnapshotCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetDiskSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDiskSnapshotCommandInput} for command's `input` shape.
 * @see {@link GetDiskSnapshotCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDiskSnapshotCommand = /** @class */ (function (_super) {
    __extends(GetDiskSnapshotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDiskSnapshotCommand(input) {
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
    GetDiskSnapshotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetDiskSnapshotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDiskSnapshotRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDiskSnapshotResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDiskSnapshotCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetDiskSnapshotCommand(input, context);
    };
    GetDiskSnapshotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetDiskSnapshotCommand(output, context);
    };
    return GetDiskSnapshotCommand;
}($Command));
export { GetDiskSnapshotCommand };
//# sourceMappingURL=GetDiskSnapshotCommand.js.map