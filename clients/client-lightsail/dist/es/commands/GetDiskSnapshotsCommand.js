import { __extends } from "tslib";
import { GetDiskSnapshotsRequest, GetDiskSnapshotsResult } from "../models/models_0";
import { deserializeAws_json1_1GetDiskSnapshotsCommand, serializeAws_json1_1GetDiskSnapshotsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about all block storage disk snapshots in your AWS account and
 *       region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetDiskSnapshotsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetDiskSnapshotsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetDiskSnapshotsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDiskSnapshotsCommandInput} for command's `input` shape.
 * @see {@link GetDiskSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDiskSnapshotsCommand = /** @class */ (function (_super) {
    __extends(GetDiskSnapshotsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDiskSnapshotsCommand(input) {
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
    GetDiskSnapshotsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetDiskSnapshotsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDiskSnapshotsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDiskSnapshotsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDiskSnapshotsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetDiskSnapshotsCommand(input, context);
    };
    GetDiskSnapshotsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetDiskSnapshotsCommand(output, context);
    };
    return GetDiskSnapshotsCommand;
}($Command));
export { GetDiskSnapshotsCommand };
//# sourceMappingURL=GetDiskSnapshotsCommand.js.map