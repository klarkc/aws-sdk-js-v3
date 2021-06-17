import { __extends } from "tslib";
import { GetImportJobsRequest, GetImportJobsResponse } from "../models/models_0";
import { deserializeAws_restJson1GetImportJobsCommand, serializeAws_restJson1GetImportJobsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about the status and settings of all the import jobs for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetImportJobsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetImportJobsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetImportJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetImportJobsCommandInput} for command's `input` shape.
 * @see {@link GetImportJobsCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetImportJobsCommand = /** @class */ (function (_super) {
    __extends(GetImportJobsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetImportJobsCommand(input) {
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
    GetImportJobsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "GetImportJobsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetImportJobsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetImportJobsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetImportJobsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetImportJobsCommand(input, context);
    };
    GetImportJobsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetImportJobsCommand(output, context);
    };
    return GetImportJobsCommand;
}($Command));
export { GetImportJobsCommand };
//# sourceMappingURL=GetImportJobsCommand.js.map