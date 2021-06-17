import { __extends } from "tslib";
import { GetSegmentImportJobsRequest, GetSegmentImportJobsResponse } from "../models/models_1";
import { deserializeAws_restJson1GetSegmentImportJobsCommand, serializeAws_restJson1GetSegmentImportJobsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about the status and settings of the import jobs for a segment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetSegmentImportJobsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetSegmentImportJobsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetSegmentImportJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSegmentImportJobsCommandInput} for command's `input` shape.
 * @see {@link GetSegmentImportJobsCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSegmentImportJobsCommand = /** @class */ (function (_super) {
    __extends(GetSegmentImportJobsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSegmentImportJobsCommand(input) {
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
    GetSegmentImportJobsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "GetSegmentImportJobsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSegmentImportJobsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetSegmentImportJobsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSegmentImportJobsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetSegmentImportJobsCommand(input, context);
    };
    GetSegmentImportJobsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetSegmentImportJobsCommand(output, context);
    };
    return GetSegmentImportJobsCommand;
}($Command));
export { GetSegmentImportJobsCommand };
//# sourceMappingURL=GetSegmentImportJobsCommand.js.map