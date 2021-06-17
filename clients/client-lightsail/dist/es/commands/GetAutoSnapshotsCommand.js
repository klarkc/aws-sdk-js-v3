import { __extends } from "tslib";
import { GetAutoSnapshotsRequest, GetAutoSnapshotsResult } from "../models/models_0";
import { deserializeAws_json1_1GetAutoSnapshotsCommand, serializeAws_json1_1GetAutoSnapshotsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the available automatic snapshots for an instance or disk. For more information,
 *       see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetAutoSnapshotsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetAutoSnapshotsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetAutoSnapshotsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAutoSnapshotsCommandInput} for command's `input` shape.
 * @see {@link GetAutoSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAutoSnapshotsCommand = /** @class */ (function (_super) {
    __extends(GetAutoSnapshotsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAutoSnapshotsCommand(input) {
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
    GetAutoSnapshotsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetAutoSnapshotsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAutoSnapshotsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetAutoSnapshotsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAutoSnapshotsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetAutoSnapshotsCommand(input, context);
    };
    GetAutoSnapshotsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetAutoSnapshotsCommand(output, context);
    };
    return GetAutoSnapshotsCommand;
}($Command));
export { GetAutoSnapshotsCommand };
//# sourceMappingURL=GetAutoSnapshotsCommand.js.map