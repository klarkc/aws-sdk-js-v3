import { __extends } from "tslib";
import { GetSoftwareUpdatesRequest, GetSoftwareUpdatesResult } from "../models/models_0";
import { deserializeAws_json1_1GetSoftwareUpdatesCommand, serializeAws_json1_1GetSoftwareUpdatesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns an Amazon S3 presigned URL for an update file associated with a specified
 *       <code>JobId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, GetSoftwareUpdatesCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, GetSoftwareUpdatesCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new GetSoftwareUpdatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSoftwareUpdatesCommandInput} for command's `input` shape.
 * @see {@link GetSoftwareUpdatesCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSoftwareUpdatesCommand = /** @class */ (function (_super) {
    __extends(GetSoftwareUpdatesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSoftwareUpdatesCommand(input) {
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
    GetSoftwareUpdatesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SnowballClient";
        var commandName = "GetSoftwareUpdatesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSoftwareUpdatesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetSoftwareUpdatesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSoftwareUpdatesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetSoftwareUpdatesCommand(input, context);
    };
    GetSoftwareUpdatesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetSoftwareUpdatesCommand(output, context);
    };
    return GetSoftwareUpdatesCommand;
}($Command));
export { GetSoftwareUpdatesCommand };
//# sourceMappingURL=GetSoftwareUpdatesCommand.js.map