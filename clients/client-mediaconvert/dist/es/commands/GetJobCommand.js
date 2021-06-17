import { __extends } from "tslib";
import { GetJobRequest, GetJobResponse } from "../models/models_1";
import { deserializeAws_restJson1GetJobCommand, serializeAws_restJson1GetJobCommand } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Retrieve the JSON for a specific completed transcoding job.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConvertClient, GetJobCommand } from "@aws-sdk/client-mediaconvert"; // ES Modules import
 * // const { MediaConvertClient, GetJobCommand } = require("@aws-sdk/client-mediaconvert"); // CommonJS import
 * const client = new MediaConvertClient(config);
 * const command = new GetJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetJobCommandInput} for command's `input` shape.
 * @see {@link GetJobCommandOutput} for command's `response` shape.
 * @see {@link MediaConvertClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetJobCommand = /** @class */ (function (_super) {
    __extends(GetJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetJobCommand(input) {
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
    GetJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaConvertClient";
        var commandName = "GetJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetJobCommand(input, context);
    };
    GetJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetJobCommand(output, context);
    };
    return GetJobCommand;
}($Command));
export { GetJobCommand };
//# sourceMappingURL=GetJobCommand.js.map