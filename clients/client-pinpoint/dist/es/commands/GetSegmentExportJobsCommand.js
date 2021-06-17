import { __extends } from "tslib";
import { GetSegmentExportJobsRequest, GetSegmentExportJobsResponse } from "../models/models_1";
import { deserializeAws_restJson1GetSegmentExportJobsCommand, serializeAws_restJson1GetSegmentExportJobsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about the status and settings of the export jobs for a segment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetSegmentExportJobsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetSegmentExportJobsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetSegmentExportJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSegmentExportJobsCommandInput} for command's `input` shape.
 * @see {@link GetSegmentExportJobsCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSegmentExportJobsCommand = /** @class */ (function (_super) {
    __extends(GetSegmentExportJobsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSegmentExportJobsCommand(input) {
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
    GetSegmentExportJobsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "GetSegmentExportJobsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSegmentExportJobsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetSegmentExportJobsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSegmentExportJobsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetSegmentExportJobsCommand(input, context);
    };
    GetSegmentExportJobsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetSegmentExportJobsCommand(output, context);
    };
    return GetSegmentExportJobsCommand;
}($Command));
export { GetSegmentExportJobsCommand };
//# sourceMappingURL=GetSegmentExportJobsCommand.js.map